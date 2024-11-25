interface AnalysisResponse {
  success: boolean;
  data?: {
    score: number;
    categories: {
      name: string;
      score: number;
      feedback: string[];
      weight: number;
    }[];
    suggestions: string[];
    strengths: string[];
    improvements: string[];
    metadata: {
      timestamp: string;
      processingTime: number;
      fileSize: number;
      version: string;
    };
  };
  error?: {
    code: string;
    message: string;
    details?: any;
  };
} 