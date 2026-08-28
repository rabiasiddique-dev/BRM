import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/utils';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeamMember } from '@/types/company';

const departmentLabels: Record<TeamMember['department'], string> = {
  management: 'Management',
  consultants: 'Property Consultants',
  sales: 'Sales Team',
  marketing: 'Marketing Team',
};

const departmentOrder: TeamMember['department'][] = ['management', 'consultants', 'sales', 'marketing'];

export const TeamSection: React.FC = () => {
  const team = companyData.team || [];
  const grouped = departmentOrder.reduce<Record<string, TeamMember[]>>((acc, dept) => {
    const members = team.filter(m => m.department === dept);
    if (members.length > 0) acc[dept] = members;
    return acc;
  }, {});

  return (
    <section id="team" className="space-y-12">
      <SectionHeading
        subtitle="Our Team"
        title="The People Behind Every Deal"
        description="A dedicated team of property consultants, investment advisors, and client support professionals serving you across Karachi."
        centered
      />

      {Object.entries(grouped).map(([dept, members]) => (
        <div key={dept} className="space-y-6">
          <h3 className="font-serif font-bold text-xl text-slate-900 border-b border-slate-200 pb-3">
            {departmentLabels[dept as TeamMember['department']]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => {
              const waUrl = member.whatsapp
                ? createWhatsAppLink(member.whatsapp, `Hello ${member.name}, I'd like to inquire about a property.`)
                : null;

              return (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury-hover transition-all duration-300 overflow-hidden group"
                >
                  {/* Avatar */}
                  <div className="relative h-56 bg-slate-900">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl font-serif text-gold-400">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-gold-gradient text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                        {departmentLabels[member.department]}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-slate-900">{member.name}</h4>
                      <p className="text-xs text-gold-700 font-semibold mt-0.5">{member.designation}</p>
                    </div>
                    {member.bio && (
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{member.bio}</p>
                    )}

                    {/* Contact */}
                    <div className="flex gap-2 pt-1">
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-xl text-xs font-semibold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-gold-600" />
                          Call
                        </a>
                      )}
                      {waUrl && (
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-xl text-xs font-semibold transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};
