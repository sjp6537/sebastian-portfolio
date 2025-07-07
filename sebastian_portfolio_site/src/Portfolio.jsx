import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Sebastian Peters</h1>
        <p className="text-lg mt-2">Mechanical Engineer | Product Developer | Inventor</p>
        <p className="mt-1 text-sm">Portland, OR | sjp6537@gmail.com | 512-632-0864</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a hands-on mechanical engineer with deep experience in transmission design,
          drivetrains, structural analysis, and complex mechanical integration—particularly for
          off-highway, aerospace, and electrified platforms. With multiple patents from my time at Dana,
          and contributions at Hyster-Yale and Oregon Tool, I specialize in transforming first-principles
          concepts into manufacturable, tested, and deployed solutions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">Aerospace Drivetrain</h3>
              <p className="mt-2">Invented and iterated 14 drivetrain configurations to reduce part count 3x. Final concept won the business. Sole inventor on the patent.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">VariGlide® Variator & Transmissions</h3>
              <p className="mt-2">Contributed to four generations of CVP variator and transmission designs. Led power flow, FEA, and system integration efforts. Named inventor on multiple patents.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">E-Braking System</h3>
              <p className="mt-2">Designed electronically controlled service and park brake system with redundant safety. Enabled precise control in large vehicle platforms.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">Transmission & Hydraulic Routing</h3>
              <p className="mt-2">Managed full system design including brake lines, cooling, hoist, VDP, and control lines. Included tuning and FMEA/DVP&R validation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">Production Facility Optimization</h3>
              <p className="mt-2">Designed and implemented a storage and expansion project saving $400K/year by improving facility layout and safety.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold mt-4">Training & Knowledge Sharing</h3>
              <p className="mt-2">Developed and taught engineering team the Lever Analogy for Powertrains. Created documentation and led in-house sessions.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Patents</h2>
        <p>
          Over 95 patented configurations and systems across drivetrains, power split devices,
          control algorithms, and mechanical inventions. View full list:
          <a
            href="https://patents.google.com/?inventor=sebastian+peters&assignee=dana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-1"
          >Google Patents</a>.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a className="text-blue-600 underline" href="mailto:sjp6537@gmail.com">sjp6537@gmail.com</a></p>
        <p>Phone: 512-632-0864</p>
      </section>
    </div>
  );
}
