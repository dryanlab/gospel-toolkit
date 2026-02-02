import YouthSectionClient from './client';

export function generateStaticParams() {
  const sections = [
    'faith-basics', 'bible-guide', 'campus', 'growth', 
    'faith-science', 'devotion', 'discipleship', 'heroes'
  ];
  return sections.map(section => ({ section }));
}

export default function YouthSectionPage({ params }: { params: Promise<{ section: string }> }) {
  return <YouthSectionClient paramsPromise={params} />;
}