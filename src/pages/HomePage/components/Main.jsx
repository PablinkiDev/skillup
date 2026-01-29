import { CertificateSection } from "./CertificateSection/CertificateSection.jsx"
import { CourseListSection } from "./courses/CourseListSection/CourseListSection.jsx"
import { FaqSection } from "./faq/FaqSection/FaqSection.jsx"
import { JobSection } from "./JobSection/JobSection.jsx"
import { ReviewsSection } from "./reviews/ReviewsSection/ReviewsSection.jsx"

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