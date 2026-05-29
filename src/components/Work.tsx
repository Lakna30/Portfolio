import { BriefcaseBusiness, CalendarRange, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type Experience = {
	step: string;
	role: string;
	company: string;
	location: string;
	period: string;
	durationLabel: string;
	summary: string;
	current?: boolean;
};

const getMonthsBetween = (startDate: Date, endDate: Date) => {
	const yearDiff = endDate.getFullYear() - startDate.getFullYear();
	const monthDiff = endDate.getMonth() - startDate.getMonth();
	const totalMonths = yearDiff * 12 + monthDiff;
	const adjusted = endDate.getDate() >= startDate.getDate() ? totalMonths : totalMonths - 1;

	return Math.max(0, adjusted);
};

const formatMonthLabel = (months: number) => `${months} month${months === 1 ? "" : "s"}`;

const Work = () => {
	const currentMonthCount = getMonthsBetween(new Date(2025, 10, 1), new Date());

	const experiences: Experience[] = [
		{
			step: "01",
			role: "Intern Web Developer",
			company: "Affixtro (Private) Limited",
			location: "Matara",
			period: "08/2025 – 02/2026",
			durationLabel: "6 months",
			summary: "Built responsive frontend features, supported UI implementation, and worked with the team on client-facing delivery.",
		},
		{
			step: "02",
			role: "Frontend Developer",
			company: "CreatX Software",
			location: "Remote",
			period: "11/2025 – Present",
			durationLabel: `${formatMonthLabel(currentMonthCount)} and counting`,
			summary: "Currently developing production UI experiences, refining reusable components, and improving overall frontend quality.",
			current: true,
		},
	];

	return (
		<section id="work" className="py-16 sm:py-20 md:py-32 relative">
			<div className="container mx-auto px-4 sm:px-6">
				<motion.h2
					className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Work Experience
				</motion.h2>

				<motion.p
					className="text-center text-gray-600 dark:text-[#C0C0C0] mb-14 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.15 }}
				>
					A step-by-step view of the roles that shaped my frontend experience and practical delivery.
				</motion.p>

				<div className="max-w-4xl mx-auto relative">
					<div className="absolute left-5 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-secondary/0" />

					<div className="space-y-8 sm:space-y-10">
						{experiences.map((experience, index) => (
							<motion.article
								key={experience.role}
								className="relative pl-16 sm:pl-20"
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.15 }}
							>
								<div className="absolute left-0 top-2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-background shadow-lg shadow-primary/20">
									<span className="text-xs sm:text-sm font-bold text-primary">{experience.step}</span>
								</div>

								<div className="rounded-2xl border border-primary/15 bg-card/80 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
									<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
										<div>

											<h3 className="text-2xl font-bold text-foreground">
												{experience.role}
											</h3>
											<p className="mt-1 text-lg text-muted-foreground">
												{experience.company}
											</p>
										</div>

										<div className="flex flex-col items-start sm:items-end gap-2">
											<span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${experience.current ? "bg-secondary/15 text-secondary" : "bg-primary/15 text-primary"}`}>
												{experience.current ? "Current role" : experience.durationLabel}
											</span>
											<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground sm:justify-end">
												<span className="inline-flex items-center gap-1.5">
													<CalendarRange className="h-4 w-4" />
													{experience.period}
												</span>
												<span className="inline-flex items-center gap-1.5">
													<MapPin className="h-4 w-4" />
													{experience.location}
												</span>
											</div>
										</div>
									</div>

									<p className="mt-5 text-gray-600 dark:text-[#C0C0C0] leading-relaxed max-w-3xl">
										{experience.summary}
									</p>

								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
