import { apologeticsSections } from '@/lib/data';
import ApologeticsSectionClient from './client';

export function generateStaticParams() {
  return apologeticsSections.map(s => ({ section: s }));
}

export default function ApologeticsSectionPage({ params }: { params: Promise<{ section: string }> }) {
  return <ApologeticsSectionClient paramsPromise={params} />;
}
