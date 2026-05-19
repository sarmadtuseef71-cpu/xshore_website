import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/rental-terms")({
  component: RentalTermsPage,
  head: () => ({
    meta: [
      { title: "Equipment Rental Terms & Conditions - Xshore Equipment" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

const sections = [
  { id: "rental-agreement", label: "1. Rental Agreement" },
  { id: "deposit-security", label: "2. Deposit & Security" },
  { id: "charges-payment", label: "3. Charges & Payment" },
  { id: "delivery-collection", label: "4. Delivery, Collection & Inspection" },
  { id: "client-responsibilities", label: "5. Client Responsibilities" },
  { id: "damage-loss", label: "6. Damage, Loss & Theft" },
  { id: "breakdown-maintenance", label: "7. Breakdown & Maintenance" },
  { id: "extension", label: "8. Extension of Rental Period" },
  { id: "early-termination", label: "9. Early Termination & Cancellation" },
  { id: "return", label: "10. Return of Equipment" },
  { id: "liability", label: "11. Liability" },
  { id: "force-majeure", label: "12. Force Majeure" },
  { id: "governing-law", label: "13. Governing Law & Disputes" },
  { id: "entire-agreement", label: "14. Entire Agreement & Severability" },
  { id: "contact", label: "15. Contact" },
];

function SectionBadge({ n }: { n: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em", background: "var(--bg3)", border: "1px solid var(--border-gold)", borderRadius: "2px", padding: "4px 10px", flexShrink: 0 }}>{n}</span>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "3px", padding: "28px 32px", color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85" }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "17px", color: "var(--text)", textTransform: "uppercase", fontFamily: "'Oswald', sans-serif", marginBottom: "20px", fontWeight: 600 }}>
      {children}
    </h2>
  );
}

function Clause({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: "12px" }}>{children}</p>;
}

function RentalTermsPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section style={{ background: "var(--bg3)", borderBottom: "1px solid var(--border)", paddingTop: "100px", paddingBottom: "60px", paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "24px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, display: "block", marginBottom: "14px" }}>
              Legal Documentation
            </span>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontFamily: "'Oswald', sans-serif", textTransform: "uppercase", fontWeight: 700, color: "var(--text)", marginBottom: "12px", lineHeight: 1.1 }}>
              Equipment Rental Terms &amp; Conditions
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>Last updated: May 2026</p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section style={{ background: "var(--bg)", padding: "60px 5vw 100px" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 280px", gap: "60px", alignItems: "start" }} className="legal-layout">

          {/* Main */}
          <div>
            {/* Intro */}
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", padding: "28px 32px", marginBottom: "32px" }}>
              <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", margin: 0 }}>
                These Terms and Conditions ("Terms") govern the rental of equipment by Xshore Equipment LLC ("Xshore", "we", "us") to any individual or company ("the Client") who hires equipment from us. By confirming a rental agreement - whether verbally, in writing, via email, or by taking delivery of equipment - the Client agrees to be bound by these Terms. These Terms apply to all rental agreements unless expressly superseded by a separately signed written contract between Xshore and the Client.
              </p>
            </div>

            {/* Clause 1 */}
            <div id="rental-agreement" style={{ marginBottom: "24px" }}>
              <SectionBadge n="01" />
              <SectionCard>
                <SectionTitle>Rental Agreement</SectionTitle>
                <Clause>1.1 A rental agreement is formed when Xshore confirms acceptance of a rental request in writing (email or formal quotation) and the Client accepts the quoted terms.</Clause>
                <Clause>1.2 All rental agreements are subject to equipment availability at the time of confirmation. Xshore reserves the right to substitute equipment of equivalent specification and capacity where the originally requested item is unavailable, subject to prior notification and Client approval.</Clause>
                <Clause>1.3 The rental period begins on the agreed delivery or collection date and ends on the agreed return date. The minimum rental period is one (1) week unless otherwise agreed in writing.</Clause>
                <p style={{ margin: 0 }}>1.4 These Terms apply to all rental arrangements including short-term hire, long-term project rentals, and any extension of an existing rental period.</p>
              </SectionCard>
            </div>

            {/* Clause 2 */}
            <div id="deposit-security" style={{ marginBottom: "24px" }}>
              <SectionBadge n="02" />
              <SectionCard>
                <SectionTitle>Deposit &amp; Security</SectionTitle>
                <Clause>2.1 Xshore reserves the right to require a security deposit prior to delivery of equipment. The deposit amount will be stated in the rental quotation or confirmation.</Clause>
                <Clause>2.2 The deposit will be refunded in full within 14 days of the equipment being returned, inspected, and confirmed to be in acceptable condition, subject to any deductions for outstanding charges, damage, loss, or cleaning costs.</Clause>
                <p style={{ margin: 0 }}>2.3 The deposit does not limit the Client's liability - if the cost of damage, loss, or outstanding charges exceeds the deposit amount, the Client remains liable for the full balance.</p>
              </SectionCard>
            </div>

            {/* Clause 3 */}
            <div id="charges-payment" style={{ marginBottom: "24px" }}>
              <SectionBadge n="03" />
              <SectionCard>
                <SectionTitle>Charges &amp; Payment</SectionTitle>
                <Clause>3.1 Rental charges are as agreed in the written quotation or rental confirmation. All prices are in UAE Dirhams (AED) and are exclusive of VAT unless otherwise stated.</Clause>
                <Clause>3.2 Value Added Tax (VAT) at the applicable UAE rate (currently 5%) will be added to all invoices in accordance with UAE Federal Tax Authority regulations.</Clause>
                <Clause>3.3 Payment terms are as specified in the rental quotation or invoice. Standard terms are net 30 days from invoice date for approved credit clients. New clients or first-time engagements may be required to pay in advance or provide a deposit before equipment is released.</Clause>
                <Clause>3.4 Xshore reserves the right to suspend a rental and recover equipment from site if payment is not received by the due date. Rental charges continue to accrue until equipment is physically collected by Xshore, regardless of suspension.</Clause>
                <Clause>3.5 Xshore reserves the right to charge interest on overdue amounts at a rate of 1.5% per month (or part month) calculated from the due date until full payment is received.</Clause>
                <Clause>3.6 Any additional charges arising during the rental period - including but not limited to delivery, collection, fuel, cleaning, repair, or replacement - will be invoiced separately and are payable within the same payment terms unless otherwise stated.</Clause>
                <p style={{ margin: 0 }}>3.7 Xshore reserves the right to adjust rental rates for extensions of existing agreements. Revised rates will be communicated in writing before any extension is confirmed.</p>
              </SectionCard>
            </div>

            {/* Clause 4 */}
            <div id="delivery-collection" style={{ marginBottom: "24px" }}>
              <SectionBadge n="04" />
              <SectionCard>
                <SectionTitle>Delivery, Collection &amp; Inspection</SectionTitle>
                <Clause>4.1 Xshore will deliver equipment to the agreed site location on the agreed date, subject to safe site access and conditions. Delivery charges will be as stated in the quotation.</Clause>
                <Clause>4.2 The Client is responsible for ensuring a safe and accessible location for both delivery and collection of equipment, including any permits, gate passes, or site access arrangements required. Xshore accepts no liability for delays caused by restricted access, unsafe site conditions, or missing documentation.</Clause>
                <Clause>4.3 Upon delivery, the Client or their authorised representative must inspect the equipment and confirm receipt in good working order. Any defects, damage, or missing items must be reported to Xshore in writing within 24 hours of delivery. Failure to report within this period will be taken as confirmation that the equipment was received in satisfactory condition.</Clause>
                <Clause>4.4 Risk in the equipment transfers to the Client at the point of delivery and reverts to Xshore only upon physical collection by an authorised Xshore representative and written sign-off confirming return.</Clause>
                <p style={{ margin: 0 }}>4.5 Equipment shall not be removed from the UAE without prior written authorisation from Xshore. Unauthorised removal from the country will constitute a breach of these Terms and may result in immediate termination of the rental agreement and full replacement cost liability.</p>
              </SectionCard>
            </div>

            {/* Clause 5 */}
            <div id="client-responsibilities" style={{ marginBottom: "24px" }}>
              <SectionBadge n="05" />
              <SectionCard>
                <SectionTitle>Client Responsibilities</SectionTitle>
                <Clause>5.1 The Client shall use the equipment solely for its intended purpose and in accordance with all applicable UAE laws, health and safety regulations, site requirements, and manufacturer operating guidelines.</Clause>
                <Clause>5.2 The Client shall ensure that all equipment is operated only by personnel who are suitably qualified, competent, and authorised to operate that type of equipment. Xshore accepts no liability for injury or damage resulting from operation by unqualified personnel.</Clause>
                <Clause>5.3 The Client shall take all reasonable precautions to protect equipment from damage, theft, exposure to hazardous substances, and misuse throughout the rental period.</Clause>
                <Clause>5.4 The Client shall store equipment securely when not in use, including appropriate measures to prevent theft or unauthorised access.</Clause>
                <Clause>5.5 The Client shall not sublet, loan, assign, or otherwise transfer possession or use of the equipment to any third party without prior written consent from Xshore.</Clause>
                <Clause>5.6 The Client shall not modify, adjust, repair, or attempt to repair the equipment in any way without prior written authorisation from Xshore. Unauthorised modification or repair will render the Client liable for any resulting damage and may void any warranty or certification applicable to the equipment.</Clause>
                <p style={{ margin: 0 }}>5.7 The Client shall immediately notify Xshore of any accident, incident, breakdown, or damage involving the equipment, regardless of whether the Client considers Xshore to be liable.</p>
              </SectionCard>
            </div>

            {/* Clause 6 */}
            <div id="damage-loss" style={{ marginBottom: "24px" }}>
              <SectionBadge n="06" />
              <SectionCard>
                <SectionTitle>Damage, Loss &amp; Theft</SectionTitle>
                <Clause>6.1 The Client is fully responsible for any loss, theft, or damage to the equipment occurring during the rental period, beyond fair wear and tear arising from normal authorised use.</Clause>
                <Clause>6.2 In the event of total loss, theft, or damage beyond economic repair, the Client will be charged the full replacement cost of the equipment at current market value, regardless of the age or depreciated value of the original unit.</Clause>
                <Clause>6.3 Repairable damage will be assessed by Xshore or an authorised third party upon return of the equipment. The Client will be charged the full cost of repair including parts, labour, and any certification or recalibration required.</Clause>
                <Clause>6.4 Rental charges continue to accrue throughout any repair period caused by Client-fault damage, until the equipment is returned to rentable condition.</Clause>
                <Clause>6.5 The Client is strongly advised to ensure that their company's site or project insurance policy includes cover for hired-in plant and equipment. Xshore does not provide insurance coverage on behalf of the Client.</Clause>
                <p style={{ margin: 0 }}>6.6 In the event of theft, the Client must: (a) report the theft to the UAE police within 24 hours of discovery; (b) provide Xshore with a copy of the official police report within 48 hours; and (c) cooperate fully with any subsequent investigation. Failure to report promptly may result in the Client bearing the full replacement cost.</p>
              </SectionCard>
            </div>

            {/* Clause 7 */}
            <div id="breakdown-maintenance" style={{ marginBottom: "24px" }}>
              <SectionBadge n="07" />
              <SectionCard>
                <SectionTitle>Breakdown &amp; Maintenance</SectionTitle>
                <Clause>7.1 All equipment is supplied in good working order. Xshore is responsible for maintenance arising from fair wear and tear during normal authorised use.</Clause>
                <Clause>7.2 In the event of a breakdown arising from normal use, the Client must notify Xshore immediately by phone or WhatsApp (+971 2 246 5375). Xshore will assess the issue and arrange repair or replacement as promptly as reasonably possible.</Clause>
                <Clause>7.3 Xshore shall not be liable for any loss, cost, or damage suffered by the Client as a direct or indirect result of equipment breakdown or downtime, including but not limited to project delays, loss of production, lost revenue, or additional hire costs from third parties.</Clause>
                <Clause>7.4 Breakdowns, failures, or damage caused by misuse, overloading, operation outside specified parameters, or neglect by the Client are not covered under Xshore's maintenance obligation. All repair and replacement costs in such cases will be charged to the Client in full.</Clause>
                <p style={{ margin: 0 }}>7.5 The Client must not arrange third-party repairs without prior written authorisation from Xshore. Xshore will not reimburse unauthorised third-party repair costs.</p>
              </SectionCard>
            </div>

            {/* Clause 8 */}
            <div id="extension" style={{ marginBottom: "24px" }}>
              <SectionBadge n="08" />
              <SectionCard>
                <SectionTitle>Extension of Rental Period</SectionTitle>
                <Clause>8.1 The Client must notify Xshore in writing (email or WhatsApp) at least 48 hours before the agreed end date if they wish to extend the rental period.</Clause>
                <Clause>8.2 Extensions are subject to equipment availability at the time of the request and must be confirmed in writing by Xshore before the extension takes effect.</Clause>
                <p style={{ margin: 0 }}>8.3 If the Client retains equipment beyond the agreed end date without an authorised extension confirmed in writing by Xshore, additional rental charges will apply automatically at the applicable daily or weekly rate. This does not constitute an agreement to extend the rental, and Xshore retains the right to request immediate return of the equipment.</p>
              </SectionCard>
            </div>

            {/* Clause 9 */}
            <div id="early-termination" style={{ marginBottom: "24px" }}>
              <SectionBadge n="09" />
              <SectionCard>
                <SectionTitle>Early Termination &amp; Cancellation</SectionTitle>
                <Clause>9.1 The Client may request early termination of the rental agreement by giving written notice to Xshore. No refund or credit will be issued for any prepaid or committed rental period unless expressly agreed in writing by Xshore.</Clause>
                <Clause>9.2 Xshore may terminate a rental agreement immediately and recover equipment from site without liability if: (a) the Client fails to make payment by the due date and does not remedy the default within 5 business days of written notice; (b) the Client breaches any material provision of these Terms and fails to remedy the breach within 5 business days of written notice; (c) the Client becomes insolvent, enters liquidation, or ceases trading; or (d) Xshore reasonably believes the equipment is at risk of damage, loss, or misuse.</Clause>
                <p style={{ margin: 0 }}>9.3 In the event of termination under clause 9.2, all outstanding rental charges and any other amounts owed to Xshore become immediately due and payable.</p>
              </SectionCard>
            </div>

            {/* Clause 10 */}
            <div id="return" style={{ marginBottom: "24px" }}>
              <SectionBadge n="10" />
              <SectionCard>
                <SectionTitle>Return of Equipment</SectionTitle>
                <Clause>10.1 The Client must return equipment to Xshore's Mussafah facility, or make the equipment available for collection by Xshore, on or before the agreed return date during normal business hours (Sunday-Thursday, 8:00 AM - 6:00 PM) unless otherwise agreed.</Clause>
                <Clause>10.2 Equipment must be returned in a clean condition and in the same working order as delivered, accounting for fair wear and tear. All accessories, attachments, manuals, and documentation originally delivered with the equipment must be returned.</Clause>
                <Clause>10.3 Cleaning charges will apply if equipment is returned in an excessively dirty, contaminated, or hazardous condition. The cost will be assessed based on the work required.</Clause>
                <p style={{ margin: 0 }}>10.4 The rental period and associated charges continue until equipment has been physically returned to Xshore and an authorised Xshore representative has signed off on the return. Notifying Xshore of intent to return does not constitute return.</p>
              </SectionCard>
            </div>

            {/* Clause 11 */}
            <div id="liability" style={{ marginBottom: "24px" }}>
              <SectionBadge n="11" />
              <SectionCard>
                <SectionTitle>Liability</SectionTitle>
                <Clause>11.1 Xshore's total aggregate liability to the Client under or in connection with any rental agreement - whether arising in contract, tort (including negligence), or otherwise - shall not exceed the total rental charges actually paid by the Client to Xshore under that specific agreement.</Clause>
                <Clause>11.2 Xshore shall not be liable under any circumstances for any indirect, consequential, special, or economic loss suffered by the Client, including but not limited to: loss of profit, loss of revenue, loss of contract, loss of production, project delays, or costs of procuring alternative equipment.</Clause>
                <p style={{ margin: 0 }}>11.3 Nothing in these Terms excludes or limits liability for death or personal injury caused by Xshore's negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or limited under UAE law.</p>
              </SectionCard>
            </div>

            {/* Clause 12 */}
            <div id="force-majeure" style={{ marginBottom: "24px" }}>
              <SectionBadge n="12" />
              <SectionCard>
                <SectionTitle>Force Majeure</SectionTitle>
                <Clause>12.1 Neither party shall be in breach of these Terms, nor liable for any delay or failure to perform any obligation, where such delay or failure results directly from circumstances beyond that party's reasonable control (Force Majeure Event), including but not limited to: acts of God, natural disaster, pandemic, government action or restriction, war, civil unrest, strikes, or critical supply chain disruption.</Clause>
                <p style={{ margin: 0 }}>12.2 The party affected by a Force Majeure Event must notify the other party as soon as practicable. If the Force Majeure Event continues for more than 30 days, either party may terminate the affected rental agreement by giving 7 days' written notice, with no liability to either party beyond settlement of charges accrued up to the date of termination.</p>
              </SectionCard>
            </div>

            {/* Clause 13 */}
            <div id="governing-law" style={{ marginBottom: "24px" }}>
              <SectionBadge n="13" />
              <SectionCard>
                <SectionTitle>Governing Law &amp; Disputes</SectionTitle>
                <Clause>13.1 These Terms and all rental agreements entered into between Xshore and the Client are governed exclusively by the laws of the United Arab Emirates and, where applicable, the laws of the Emirate of Abu Dhabi.</Clause>
                <Clause>13.2 In the event of a dispute, the parties agree to first attempt resolution through good-faith negotiation within 30 days of one party notifying the other of the dispute in writing.</Clause>
                <p style={{ margin: 0 }}>13.3 If the dispute is not resolved through negotiation, it shall be referred to and finally resolved by the competent courts of Abu Dhabi, UAE, to whose exclusive jurisdiction both parties irrevocably submit.</p>
              </SectionCard>
            </div>

            {/* Clause 14 */}
            <div id="entire-agreement" style={{ marginBottom: "24px" }}>
              <SectionBadge n="14" />
              <SectionCard>
                <SectionTitle>Entire Agreement &amp; Severability</SectionTitle>
                <Clause>14.1 These Terms, together with the applicable rental quotation or confirmation, constitute the entire agreement between Xshore and the Client in respect of the rental of equipment and supersede all prior discussions, representations, or agreements relating to the same subject matter.</Clause>
                <Clause>14.2 If any provision of these Terms is found to be invalid, unlawful, or unenforceable under applicable law, that provision shall be deemed severed from the remaining Terms, which shall continue in full force and effect.</Clause>
                <p style={{ margin: 0 }}>14.3 No waiver by Xshore of any breach of these Terms shall be considered a waiver of any subsequent breach of the same or any other provision.</p>
              </SectionCard>
            </div>

            {/* Clause 15 - Contact */}
            <div id="contact">
              <SectionBadge n="15" />
              <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", borderRadius: "3px", padding: "28px 32px" }}>
                <SectionTitle>Contact</SectionTitle>
                <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.85", marginBottom: "24px" }}>
                  For any questions relating to these Terms:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <Mail style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <a href="mailto:sales@xshore.ae" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "15px" }}>sales@xshore.ae</a>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <Phone style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <a href="tel:+97122465375" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "15px" }}>+971 2 246 5375</a>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <MapPin style={{ color: "var(--gold)", width: "18px", height: "18px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dim)", fontSize: "15px" }}>Mussafah Industrial Area, Abu Dhabi, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar TOC */}
          <aside style={{ position: "sticky", top: "100px" }} className="legal-toc">
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", borderRadius: "3px", padding: "24px 20px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "16px", fontFamily: "'Oswald', sans-serif" }}>
                On This Page
              </p>
              <nav>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        style={{ display: "block", fontSize: "12px", color: "var(--text-dim)", textDecoration: "none", padding: "5px 10px", borderRadius: "2px", lineHeight: "1.4" }}
                        onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--gold)"; (e.target as HTMLAnchorElement).style.background = "rgba(200,137,42,0.06)"; }}
                        onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--text-dim)"; (e.target as HTMLAnchorElement).style.background = "transparent"; }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
