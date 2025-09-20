import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsSchema, type News } from "@shared/schema";
import { Plus, Edit, Trash2, Loader2, Calendar, Eye, EyeOff } from "lucide-react";
import { z } from "zod";

const newsFormSchema = insertNewsSchema;
type NewsFormData = z.infer<typeof newsFormSchema>;

export default function NewsManagement() {
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ["/api/admin/news"],
  });

  const form = useForm<NewsFormData>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      imageUrl: "",
      published: "true",
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: NewsFormData) => {
      await apiRequest("POST", "/api/news", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
      toast({ title: "News article created successfully!" });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({ title: "Failed to create news article", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: NewsFormData }) => {
      await apiRequest("PUT", `/api/news/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
      toast({ title: "News article updated successfully!" });
      setIsDialogOpen(false);
      setEditingNews(null);
      form.reset();
    },
    onError: () => {
      toast({ title: "Failed to update news article", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/news/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/news"] });
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
      toast({ title: "News article deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Failed to delete news article", variant: "destructive" });
    },
  });

  const handleSubmit = (data: NewsFormData) => {
    if (editingNews) {
      updateMutation.mutate({ id: editingNews.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (newsItem: News) => {
    setEditingNews(newsItem);
    form.reset({
      title: newsItem.title,
      excerpt: newsItem.excerpt,
      content: newsItem.content,
      category: newsItem.category,
      imageUrl: newsItem.imageUrl || "",
      published: newsItem.published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingNews(null);
    form.reset();
  };

  if (isLoading) {
    return (
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>News Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          News Management
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setIsDialogOpen(true)} data-testid="button-add-news">
                <Plus className="h-4 w-4 mr-2" />
                Add News
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl glass-card max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingNews ? "Edit News Article" : "Add New News Article"}
                </DialogTitle>
                <DialogDescription>
                  {editingNews ? "Update news article information" : "Create a new news article"}
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...form.register("title")}
                    className="bg-input border-border"
                    data-testid="input-news-title"
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm text-destructive">{form.formState.errors.title.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => form.setValue("category", value)} defaultValue={form.getValues("category")}>
                      <SelectTrigger className="bg-input border-border" data-testid="select-news-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Company News">Company News</SelectItem>
                        <SelectItem value="Product Updates">Product Updates</SelectItem>
                        <SelectItem value="Awards">Awards</SelectItem>
                        <SelectItem value="Behind the Scenes">Behind the Scenes</SelectItem>
                        <SelectItem value="Press Release">Press Release</SelectItem>
                        <SelectItem value="Industry Insights">Industry Insights</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      {...form.register("imageUrl")}
                      className="bg-input border-border"
                      placeholder="https://example.com/image.jpg"
                      data-testid="input-news-image"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    {...form.register("excerpt")}
                    rows={2}
                    className="bg-input border-border"
                    placeholder="Brief summary of the article..."
                    data-testid="textarea-news-excerpt"
                  />
                  {form.formState.errors.excerpt && (
                    <p className="text-sm text-destructive">{form.formState.errors.excerpt.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    {...form.register("content")}
                    rows={8}
                    className="bg-input border-border"
                    placeholder="Full article content..."
                    data-testid="textarea-news-content"
                  />
                  {form.formState.errors.content && (
                    <p className="text-sm text-destructive">{form.formState.errors.content.message}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="published"
                    checked={form.watch("published") === "true"}
                    onCheckedChange={(checked) => form.setValue("published", checked ? "true" : "false")}
                    data-testid="switch-news-published"
                  />
                  <Label htmlFor="published">Published</Label>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    type="submit" 
                    disabled={createMutation.isPending || updateMutation.isPending}
                    data-testid="button-save-news"
                  >
                    {(createMutation.isPending || updateMutation.isPending) ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {editingNews ? "Updating..." : "Creating..."}
                      </>
                    ) : (
                      editingNews ? "Update Article" : "Create Article"
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleDialogClose} data-testid="button-cancel-news">
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription>
          Manage news articles and press releases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {news && news.length > 0 ? (
            news.map((article) => (
              <div key={article.id} className="flex items-start justify-between p-4 border border-border rounded-lg" data-testid={`news-item-${article.id}`}>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold" data-testid={`news-title-${article.id}`}>{article.title}</h3>
                    <Badge variant="outline" data-testid={`news-category-badge-${article.id}`}>{article.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {article.published === "true" ? (
                        <>
                          <Eye className="h-3 w-3" />
                          <span data-testid={`news-published-${article.id}`}>Published</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-3 w-3" />
                          <span data-testid={`news-draft-${article.id}`}>Draft</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid={`news-excerpt-${article.id}`}>
                    {article.excerpt.length > 150 
                      ? `${article.excerpt.substring(0, 150)}...` 
                      : article.excerpt
                    }
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span data-testid={`news-date-${article.id}`}>
                      {new Date(article.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    {article.updatedAt !== article.createdAt && (
                      <span className="text-accent">
                        • Updated {new Date(article.updatedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEdit(article)}
                    data-testid={`button-edit-news-${article.id}`}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDelete(article.id)}
                    disabled={deleteMutation.isPending}
                    data-testid={`button-delete-news-${article.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No news articles found. Create your first article!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
