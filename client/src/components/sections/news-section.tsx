import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import type { News } from "@shared/schema";

export default function NewsSection() {
  const { data: news, isLoading } = useQuery<News[]>({
    queryKey: ["/api/news"],
  });

  if (isLoading) {
    return (
      <section id="news" className="py-32 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient">
              Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-4 bg-muted rounded mb-3"></div>
                  <div className="h-6 bg-muted rounded mb-3"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-4 w-20 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient" data-testid="news-title">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="news-subtitle">
            Stay updated with our latest innovations and industry insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news && news.length > 0 ? (
            news.slice(0, 3).map((article) => (
              <article key={article.id} className="glass-card rounded-2xl overflow-hidden project-card" data-testid={`news-card-${article.id}`}>
                {article.imageUrl ? (
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    data-testid={`news-image-${article.id}`}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-futuristic text-muted-foreground">
                      {article.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span data-testid={`news-date-${article.id}`}>
                      {new Date(article.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <Badge variant="outline" className="text-xs" data-testid={`news-category-${article.id}`}>
                      {article.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2" data-testid={`news-title-${article.id}`}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3" data-testid={`news-excerpt-${article.id}`}>
                    {article.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 font-semibold text-sm p-0"
                    data-testid={`news-button-${article.id}`}
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <p className="text-muted-foreground text-lg">No news articles available at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:glow-purple transition-all" data-testid="button-view-all-news">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
