import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'span' | 'div';
}

export default function GradientText({ children, className = '', as: Tag = 'span' }: GradientTextProps) {
  return (
    <Tag
      className={className}
      style={{
        background: 'linear-gradient(90deg, #F3C623, #FFB22C)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Tag>
  );
}
