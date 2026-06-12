export type Category = '交互设计 Interactive' | '空间设计 Spatial' | '平面设计 Graphic';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}
