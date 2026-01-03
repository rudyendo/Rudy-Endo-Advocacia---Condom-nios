
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PageContent {
  branding: {
    logoUrl: string;
    showDefaultLogo: boolean;
  };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    image: string;
    yearsExperience: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
    stats: string;
    items: string[];
    quote: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    title: string;
    description: string;
  };
  ebook: {
    title: string;
    highlight: string;
    description: string;
    items: string[];
  };
}
