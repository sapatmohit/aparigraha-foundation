import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
	const values = [
		{
			icon: Heart,
			title: 'Compassion',
			description:
				'Every action we take is driven by genuine care and empathy for those we serve.',
		},
		{
			icon: Target,
			title: 'Impact Focus',
			description:
				'We measure success by the tangible, lasting change we create in communities.',
		},
		{
			icon: Users,
			title: 'Collaboration',
			description:
				'We believe in the power of partnerships and community-driven solutions.',
		},
		{
			icon: Globe,
			title: 'Sustainability',
			description:
				'Our programs are designed to create self-sustaining positive change.',
		},
	];

	const team = [
		{
			name: 'Dr. Kavita Patil',
			role: 'Senior Director',
			
			bio: '15+ years in international development, PhD in Public Health from Harvard.',
		},
		{
			name: 'Rushikesh Sharma',
			role: 'Event Director',
			
			bio: 'Former UN field coordinator with expertise in community development programs.',
		},
		{
			name: 'Anita Desai',
			role: 'Field Operations Lead',
			
			bio: 'Local community leader with 10+ years experience in grassroots organizing.',
		},
	];

	return (
		<section id="about" className="section-padding bg-gradient-subtle">
			<div className="container-custom">
				{/* Mission & Vision */}
				<div className="text-center mb-20">
					<Badge variant="secondary" className="mb-4 text-sm font-medium">
						About Us
					</Badge>
					<h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
						Best Way to live life is "Live and Let Live"
					</h2>
					<div className="max-w-4xl mx-auto">
						<div className="grid md:grid-cols-2 gap-12 mb-16">
							<div className="text-left">
								<h3 className="text-2xl font-semibold mb-4 text-primary">
									Our Mission
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed">
									To Empower "YOUNG India" with skills, tools, Techniques and
									methods to Face the Global Change
								</p>
							</div>
							<div className="text-left">
								<h3 className="text-2xl font-semibold mb-4 text-primary">
									Our Vision
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Empowering vision through belief to create lasting impact and
									inspire positive change.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Core Values */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-center mb-12">
						Our Core Values
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<Card
								key={value.title}
								className={`program-card fade-in-up stagger-${index + 1}`}
							>
								<CardContent className="p-6 text-center">
									<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<value.icon className="h-8 w-8 text-primary" />
									</div>
									<h4 className="text-xl font-semibold mb-3">{value.title}</h4>
									<p className="text-muted-foreground">{value.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Leadership Team */}
				<div>
					<h3 className="text-3xl font-bold text-center mb-12">
						Our Leadership Team
					</h3>
					<div className="grid md:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<Card
								key={member.name}
								className={`impact-card text-center fade-in-up stagger-${
									index + 1
								}`}
							>
								<CardContent className="p-6">
									<img
										src={member.image}
										alt={member.name}
										className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
									/>
									<h4 className="text-xl font-semibold mb-2">{member.name}</h4>
									<p className="text-secondary font-medium mb-3">
										{member.role}
									</p>
									<p className="text-muted-foreground text-sm">{member.bio}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
