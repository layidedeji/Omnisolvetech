import { chatbotKnowledgeBase } from './chatbotKnowledgeBase';

interface SearchResult {
  content: string;
  category: string;
  score: number;
  source: any;
}

export class SemanticSearchEngine {
  private stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'must'
  ]);

  private tokenize(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !this.stopWords.has(word));
  }

  private calculateCosineSimilarity(tokens1: string[], tokens2: string[]): number {
    const set1 = new Set(tokens1);
    const set2 = new Set(tokens2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    
    if (set1.size === 0 || set2.size === 0) return 0;
    
    return intersection.size / Math.sqrt(set1.size * set2.size);
  }

  private calculateJaccardSimilarity(tokens1: string[], tokens2: string[]): number {
    const set1 = new Set(tokens1);
    const set2 = new Set(tokens2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    return union.size === 0 ? 0 : intersection.size / union.size;
  }

  private calculateSemanticScore(query: string, target: string): number {
    const queryTokens = this.tokenize(query);
    const targetTokens = this.tokenize(target);
    
    const cosine = this.calculateCosineSimilarity(queryTokens, targetTokens);
    const jaccard = this.calculateJaccardSimilarity(queryTokens, targetTokens);
    
    // Weighted combination
    return (cosine * 0.6) + (jaccard * 0.4);
  }

  searchKnowledgeBase(query: string, threshold: number = 0.3): SearchResult[] {
    const results: SearchResult[] = [];
    
    // Search FAQs
    const faqCategories = ['general', 'technical', 'process', 'pricing'];
    faqCategories.forEach(category => {
      const faqs = chatbotKnowledgeBase.faqs[category] || [];
      faqs.forEach(faq => {
        const questionScore = this.calculateSemanticScore(query, faq.question);
        const answerScore = this.calculateSemanticScore(query, faq.answer);
        const maxScore = Math.max(questionScore, answerScore);
        
        if (maxScore >= threshold) {
          results.push({
            content: faq.answer,
            category: `FAQ - ${category}`,
            score: maxScore,
            source: faq
          });
        }
      });
    });
    
    // Search Services
    Object.entries(chatbotKnowledgeBase.services).forEach(([key, service]) => {
      const titleScore = this.calculateSemanticScore(query, service.title);
      const descScore = this.calculateSemanticScore(query, service.description);
      const benefitsScore = this.calculateSemanticScore(query, service.benefits.join(' '));
      const maxScore = Math.max(titleScore, descScore, benefitsScore);
      
      if (maxScore >= threshold) {
        results.push({
          content: service.description,
          category: 'Services',
          score: maxScore,
          source: service
        });
      }
    });
    
    // Search Company Info
    const companyText = Object.values(chatbotKnowledgeBase.company).join(' ');
    const companyScore = this.calculateSemanticScore(query, companyText);
    if (companyScore >= threshold) {
      results.push({
        content: chatbotKnowledgeBase.company.mission,
        category: 'Company',
        score: companyScore,
        source: chatbotKnowledgeBase.company
      });
    }
    
    return results.sort((a, b) => b.score - a.score);
  }

  findBestMatch(query: string, minScore: number = 0.4): SearchResult | null {
    const results = this.searchKnowledgeBase(query, minScore);
    return results.length > 0 ? results[0] : null;
  }
}

export const semanticSearchEngine = new SemanticSearchEngine();