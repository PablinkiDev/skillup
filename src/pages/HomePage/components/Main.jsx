import { CertificateSection } from "./CertificateSection.jsx"
import { CourseListSection } from "./courses/CourseListSection.jsx"
import { FaqSection } from "./faq/FaqSection.jsx"
import { JobSection } from "./JobSection.jsx"
import { ReviewsSection } from "./reviews/ReviewsSection.jsx"

export function Main() {
    return (
        <main>
            <CourseListSection />
            <CertificateSection />
            <ReviewsSection />
            <JobSection />
            <FaqSection />
        </main>
    )
}