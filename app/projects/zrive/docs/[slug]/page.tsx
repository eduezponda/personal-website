import { notFound } from "next/navigation";

const pdfRegistry: Record<string, { title: string; path: string }> = {
  "module-1-api": {
    title: "API Engineering Fundamentals",
    path: "/docs/zrive/module-1-api.pdf",
  },
  "module-2-eda": {
    title: "Exploratory Data Analysis",
    path: "/docs/zrive/module-2-eda.pdf",
  },
  "module-3-statistical-learning-1": {
    title: "Statistical Learning Fundamentals, Part 1",
    path: "/docs/zrive/module-3-statistical-learning-1.pdf",
  },
  "module-3-statistical-learning-2": {
    title: "Statistical Learning Fundamentals, Part 2",
    path: "/docs/zrive/module-3-statistical-learning-2.pdf",
  },
  "module-4-model-fitting": {
    title: "Optimal Model Fitting",
    path: "/docs/zrive/module-4-model-fitting.pdf",
  },
  "module-5-analyse-diagnose-improve": {
    title: "Model Analysis, Diagnosis and Improvement",
    path: "/docs/zrive/module-5-analyse-diagnose-improve.pdf",
  },
  "module-6-system-design": {
    title: "System Design",
    path: "/docs/zrive/module-6-system-design.pdf",
  },
  "module-7-business-translation": {
    title: "Business Translation",
    path: "/docs/zrive/module-7-business-translation.pdf",
  },
};

export function generateStaticParams() {
  return Object.keys(pdfRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = pdfRegistry[slug];
  if (!entry) notFound();
  return {
    title: `${entry.title} | Eduardo Ezponda`,
  };
}

export default async function ZrivePdfPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = pdfRegistry[slug];
  if (!entry) notFound();

  return (
    <div className="w-full h-[calc(100vh-4rem)]">
      <iframe
        src={entry.path}
        title={entry.title}
        className="w-full h-full border-0"
      />
    </div>
  );
}
