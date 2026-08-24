import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseSlugs, getCourse, relatedCourses } from "@/lib/courses";
import { buildAiView, isAiCourse } from "@/lib/ai-course";
import { site } from "@/lib/content";
import AiCoursePage from "@/components/course/ai/AiCoursePage";
import CourseHero from "@/components/course/CourseHero";
import AiOverview from "@/components/course/ai/AiOverview";
import AiCertificate from "@/components/course/ai/AiCertificate";
import ModuleExplorer from "@/components/course/ModuleExplorer";
import ToolStack from "@/components/course/ToolStack";
import CourseFit from "@/components/course/CourseFit";
import CourseFutureScope from "@/components/course/CourseFutureScope";
import CourseProjects from "@/components/course/CourseProjects";
import CourseWhyChoose from "@/components/course/CourseWhyChoose";
import CourseReviews from "@/components/course/CourseReviews";
import CourseFaq from "@/components/course/CourseFaq";
import RelatedCourses from "@/components/course/RelatedCourses";
import CourseCta from "@/components/course/CourseCta";
import StickyCourseBar from "@/components/course/StickyCourseBar";
import ScrollToHero from "@/components/course/ScrollToHero";

type CoursePageProps = { params: Promise<{ slug: string }> };

/** Every course in the registry is prerendered at build time. */
export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) return { title: `Course not found — ${site.name} ${site.city}` };

  const title = `${course.title} Course in ${site.city} — ${site.name}`;

  return {
    title,
    description: course.hero.tagline,
    openGraph: { title, description: course.hero.tagline, type: "website" },
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  const related = relatedCourses(course.slug);

  /* Courses that hang off the AI mega menu get their own, longer page shape.
     Everything else keeps the standard catalogue layout below. */
  if (isAiCourse(course.slug)) {
    return <AiCoursePage course={course} related={related} />;
  }

  const view = buildAiView(course);

  return (
    <>
      <ScrollToHero />
      <CourseHero course={course} />
      <AiOverview course={course} view={view} />
      <ModuleExplorer course={course} />
      <ToolStack course={course} />
      <AiCertificate view={view} />
      <CourseProjects course={course} />
      <CourseFit course={course} variant="checklist" />
      <CourseFutureScope course={course} />
      <CourseWhyChoose course={course} />
      <CourseReviews course={course} />
      <CourseFaq course={course} />
      <RelatedCourses courses={related} />
      <CourseCta course={course} showMessage={false} />
      <StickyCourseBar
        title={`${course.title} — ${site.city}`}
        duration={course.spec[0].value}
      />
    </>
  );
}
