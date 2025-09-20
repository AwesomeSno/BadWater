import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Users, Handshake, Upload, Loader2 } from "lucide-react";

const talentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(10, "Please provide more details about yourself"),
});

const partnershipSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  proposal: z.string().min(20, "Please provide more details about your proposal"),
});

type TalentFormData = z.infer<typeof talentSchema>;
type PartnershipFormData = z.infer<typeof partnershipSchema>;

export default function JoinUsSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const talentForm = useForm<TalentFormData>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      message: "",
    },
  });

  const partnershipForm = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      partnershipType: "",
      proposal: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: { type: string; data: any }) => {
      await apiRequest("POST", "/api/submissions", data);
    },
    onSuccess: () => {
      toast({
        title: "Submission received!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      talentForm.reset();
      partnershipForm.reset();
    },
    onError: () => {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleTalentSubmit = (data: TalentFormData) => {
    submitMutation.mutate({
      type: "talent",
      data,
    });
  };

  const handlePartnershipSubmit = (data: PartnershipFormData) => {
    submitMutation.mutate({
      type: "partnership",
      data,
    });
  };

  return (
    <section id="join" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient" data-testid="join-title">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="join-subtitle">
            Ready to shape the future? We're looking for exceptional talent to join our world-class team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Talent Recruitment Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-futuristic font-bold text-2xl mb-6 text-primary flex items-center" data-testid="talent-form-title">
              <Users className="mr-3 h-6 w-6" />
              Talent Recruitment
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="talent-form-description">
              Join a team of visionaries, creators, and innovators working on projects that push the boundaries of technology and entertainment.
            </p>
            
            <form onSubmit={talentForm.handleSubmit(handleTalentSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    {...talentForm.register("firstName")}
                    className="bg-input border-border"
                    data-testid="input-first-name"
                  />
                  {talentForm.formState.errors.firstName && (
                    <p className="text-sm text-destructive">{talentForm.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    {...talentForm.register("lastName")}
                    className="bg-input border-border"
                    data-testid="input-last-name"
                  />
                  {talentForm.formState.errors.lastName && (
                    <p className="text-sm text-destructive">{talentForm.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...talentForm.register("email")}
                  className="bg-input border-border"
                  data-testid="input-email"
                />
                {talentForm.formState.errors.email && (
                  <p className="text-sm text-destructive">{talentForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select onValueChange={(value) => talentForm.setValue("department", value)}>
                  <SelectTrigger className="bg-input border-border" data-testid="select-department">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="game-development">Game Development</SelectItem>
                    <SelectItem value="ai-research">AI Research</SelectItem>
                    <SelectItem value="film-production">Film Production</SelectItem>
                    <SelectItem value="software-engineering">Software Engineering</SelectItem>
                    <SelectItem value="sound-design">Sound Design</SelectItem>
                  </SelectContent>
                </Select>
                {talentForm.formState.errors.department && (
                  <p className="text-sm text-destructive">{talentForm.formState.errors.department.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about yourself</Label>
                <Textarea
                  id="message"
                  {...talentForm.register("message")}
                  rows={4}
                  className="bg-input border-border resize-none"
                  placeholder="Tell us about yourself and your experience..."
                  data-testid="textarea-message"
                />
                {talentForm.formState.errors.message && (
                  <p className="text-sm text-destructive">{talentForm.formState.errors.message.message}</p>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <Button type="button" variant="outline" className="glass" data-testid="button-upload-resume">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Resume
                </Button>
                <span className="text-sm text-muted-foreground">PDF, DOC (Max 5MB)</span>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:glow-blue transition-all"
                disabled={submitMutation.isPending}
                data-testid="button-submit-talent"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </div>
          
          {/* Partnership Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-futuristic font-bold text-2xl mb-6 text-accent flex items-center" data-testid="partnership-form-title">
              <Handshake className="mr-3 h-6 w-6" />
              Partnership Opportunities
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="partnership-form-description">
              Interested in collaborating with BadWater? Let's explore how we can create something extraordinary together.
            </p>
            
            <form onSubmit={partnershipForm.handleSubmit(handlePartnershipSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    {...partnershipForm.register("companyName")}
                    className="bg-input border-border"
                    data-testid="input-company-name"
                  />
                  {partnershipForm.formState.errors.companyName && (
                    <p className="text-sm text-destructive">{partnershipForm.formState.errors.companyName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    {...partnershipForm.register("contactPerson")}
                    className="bg-input border-border"
                    data-testid="input-contact-person"
                  />
                  {partnershipForm.formState.errors.contactPerson && (
                    <p className="text-sm text-destructive">{partnershipForm.formState.errors.contactPerson.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="partnershipEmail">Business Email</Label>
                <Input
                  id="partnershipEmail"
                  type="email"
                  {...partnershipForm.register("email")}
                  className="bg-input border-border"
                  data-testid="input-partnership-email"
                />
                {partnershipForm.formState.errors.email && (
                  <p className="text-sm text-destructive">{partnershipForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="partnershipType">Partnership Type</Label>
                <Select onValueChange={(value) => partnershipForm.setValue("partnershipType", value)}>
                  <SelectTrigger className="bg-input border-border" data-testid="select-partnership-type">
                    <SelectValue placeholder="Partnership Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology-licensing">Technology Licensing</SelectItem>
                    <SelectItem value="co-development">Co-Development</SelectItem>
                    <SelectItem value="investment-opportunity">Investment Opportunity</SelectItem>
                    <SelectItem value="distribution-partnership">Distribution Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {partnershipForm.formState.errors.partnershipType && (
                  <p className="text-sm text-destructive">{partnershipForm.formState.errors.partnershipType.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="proposal">Partnership Proposal</Label>
                <Textarea
                  id="proposal"
                  {...partnershipForm.register("proposal")}
                  rows={4}
                  className="bg-input border-border resize-none"
                  placeholder="Describe your partnership proposal..."
                  data-testid="textarea-proposal"
                />
                {partnershipForm.formState.errors.proposal && (
                  <p className="text-sm text-destructive">{partnershipForm.formState.errors.proposal.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold hover:glow-purple transition-all"
                disabled={submitMutation.isPending}
                data-testid="button-submit-partnership"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Proposal"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
