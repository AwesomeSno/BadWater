import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Submission } from "@shared/schema";
import { Calendar, Mail, User, Building, MessageSquare, CheckCircle, Clock, Loader2, Eye } from "lucide-react";
import { useState } from "react";

interface TalentSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  message: string;
}

interface PartnershipSubmissionData {
  companyName: string;
  contactPerson: string;
  email: string;
  partnershipType: string;
  proposal: string;
}

interface ContactSubmissionData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function FormSubmissions() {
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: submissions, isLoading } = useQuery<Submission[]>({
    queryKey: ["/api/admin/submissions"],
  });

  const processMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("PUT", `/api/admin/submissions/${id}/process`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/submissions"] });
      toast({ title: "Submission marked as processed!" });
    },
    onError: () => {
      toast({ title: "Failed to process submission", variant: "destructive" });
    },
  });

  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDialogOpen(true);
  };

  const handleProcessSubmission = (id: number) => {
    processMutation.mutate(id);
  };

  const renderSubmissionContent = (submission: Submission) => {
    const data = submission.data as any;
    
    switch (submission.type) {
      case 'talent':
        const talentData = data as TalentSubmissionData;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <p className="text-sm" data-testid="talent-name">
                  {talentData.firstName} {talentData.lastName}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm" data-testid="talent-email">{talentData.email}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Department</label>
              <p className="text-sm" data-testid="talent-department">{talentData.department}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <p className="text-sm whitespace-pre-wrap" data-testid="talent-message">{talentData.message}</p>
            </div>
          </div>
        );
        
      case 'partnership':
        const partnershipData = data as PartnershipSubmissionData;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Company</label>
                <p className="text-sm" data-testid="partnership-company">{partnershipData.companyName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Contact Person</label>
                <p className="text-sm" data-testid="partnership-contact">{partnershipData.contactPerson}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm" data-testid="partnership-email">{partnershipData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Partnership Type</label>
                <p className="text-sm" data-testid="partnership-type">{partnershipData.partnershipType}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Proposal</label>
              <p className="text-sm whitespace-pre-wrap" data-testid="partnership-proposal">{partnershipData.proposal}</p>
            </div>
          </div>
        );
        
      case 'contact':
        const contactData = data as ContactSubmissionData;
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <p className="text-sm" data-testid="contact-name">{contactData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-sm" data-testid="contact-email">{contactData.email}</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <p className="text-sm" data-testid="contact-subject">{contactData.subject}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <p className="text-sm whitespace-pre-wrap" data-testid="contact-message">{contactData.message}</p>
            </div>
          </div>
        );
        
      default:
        return <p className="text-sm text-muted-foreground">Unknown submission type</p>;
    }
  };

  const getSubmissionIcon = (type: string) => {
    switch (type) {
      case 'talent':
        return <User className="h-4 w-4" />;
      case 'partnership':
        return <Building className="h-4 w-4" />;
      case 'contact':
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const getSubmissionTitle = (submission: Submission) => {
    const data = submission.data as any;
    switch (submission.type) {
      case 'talent':
        return `${data.firstName} ${data.lastName}`;
      case 'partnership':
        return data.companyName;
      case 'contact':
        return data.name;
      default:
        return 'Unknown';
    }
  };

  const getSubmissionSubtitle = (submission: Submission) => {
    const data = submission.data as any;
    switch (submission.type) {
      case 'talent':
        return data.department;
      case 'partnership':
        return data.partnershipType;
      case 'contact':
        return data.subject;
      default:
        return '';
    }
  };

  const filterSubmissionsByType = (type: string) => {
    return submissions?.filter(sub => sub.type === type) || [];
  };

  const SubmissionList = ({ submissions: filteredSubmissions }: { submissions: Submission[] }) => (
    <div className="space-y-4">
      {filteredSubmissions.length > 0 ? (
        filteredSubmissions.map((submission) => (
          <div key={submission.id} className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid={`submission-item-${submission.id}`}>
            <div className="flex items-start space-x-3 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg">
                {getSubmissionIcon(submission.type)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold" data-testid={`submission-title-${submission.id}`}>
                    {getSubmissionTitle(submission)}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`capitalize ${submission.type === 'talent' ? 'border-primary/20 text-primary' : 
                      submission.type === 'partnership' ? 'border-accent/20 text-accent' : 
                      'border-muted text-muted-foreground'}`}
                    data-testid={`submission-type-${submission.id}`}
                  >
                    {submission.type}
                  </Badge>
                  {submission.processed === "true" ? (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/20" data-testid={`submission-processed-${submission.id}`}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Processed
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-yellow-500/20 text-yellow-400" data-testid={`submission-pending-${submission.id}`}>
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`submission-subtitle-${submission.id}`}>
                  {getSubmissionSubtitle(submission)}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span data-testid={`submission-date-${submission.id}`}>
                    {new Date(submission.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleViewSubmission(submission)}
                data-testid={`button-view-submission-${submission.id}`}
              >
                <Eye className="h-4 w-4" />
              </Button>
              {submission.processed === "false" && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleProcessSubmission(submission.id)}
                  disabled={processMutation.isPending}
                  data-testid={`button-process-submission-${submission.id}`}
                >
                  {processMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No submissions found.</p>
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const totalSubmissions = submissions?.length || 0;
  const pendingSubmissions = submissions?.filter(sub => sub.processed === "false").length || 0;
  const talentSubmissions = filterSubmissionsByType('talent');
  const partnershipSubmissions = filterSubmissionsByType('partnership');
  const contactSubmissions = filterSubmissionsByType('contact');

  return (
    <>
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Form Submissions
            <div className="flex gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-primary" data-testid="total-submissions">{totalSubmissions}</div>
                <div className="text-muted-foreground">Total</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-accent" data-testid="pending-submissions">{pendingSubmissions}</div>
                <div className="text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            Manage contact forms, talent applications, and partnership inquiries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4 glass">
              <TabsTrigger value="all" data-testid="tab-all-submissions">All ({totalSubmissions})</TabsTrigger>
              <TabsTrigger value="talent" data-testid="tab-talent-submissions">Talent ({talentSubmissions.length})</TabsTrigger>
              <TabsTrigger value="partnership" data-testid="tab-partnership-submissions">Partnership ({partnershipSubmissions.length})</TabsTrigger>
              <TabsTrigger value="contact" data-testid="tab-contact-submissions">Contact ({contactSubmissions.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <SubmissionList submissions={submissions || []} />
            </TabsContent>
            
            <TabsContent value="talent">
              <SubmissionList submissions={talentSubmissions} />
            </TabsContent>
            
            <TabsContent value="partnership">
              <SubmissionList submissions={partnershipSubmissions} />
            </TabsContent>
            
            <TabsContent value="contact">
              <SubmissionList submissions={contactSubmissions} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Submission Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl glass-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedSubmission && getSubmissionIcon(selectedSubmission.type)}
              {selectedSubmission && `${selectedSubmission.type.charAt(0).toUpperCase() + selectedSubmission.type.slice(1)} Submission`}
            </DialogTitle>
            <DialogDescription>
              {selectedSubmission && (
                <>
                  Submitted on {new Date(selectedSubmission.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                  {selectedSubmission.processed === "true" && (
                    <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/20">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Processed
                    </Badge>
                  )}
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-6">
              {renderSubmissionContent(selectedSubmission)}
              
              {selectedSubmission.processed === "false" && (
                <div className="flex justify-end pt-4 border-t border-border">
                  <Button 
                    onClick={() => handleProcessSubmission(selectedSubmission.id)}
                    disabled={processMutation.isPending}
                    className="bg-primary hover:bg-primary/90"
                    data-testid="button-mark-processed"
                  >
                    {processMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Mark as Processed
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
