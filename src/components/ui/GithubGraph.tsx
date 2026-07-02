import React from "react";

export async function GithubGraph() {
  let svgContent = "";
  try {
    const res = await fetch('https://ghchart.rshah.org/juswa005', { 
      next: { revalidate: 3600 } 
    });
    if (res.ok) {
      svgContent = await res.text();
      // Make squares into dots (dot matrix) by adding rx="5" to all rects
      svgContent = svgContent.replace(/<rect/g, '<rect rx="5" ry="5"');
      // Add standard responsive classes to the SVG root
      svgContent = svgContent.replace(/<svg/, '<svg class="w-full h-auto min-w-[600px] max-w-[800px] mx-auto"');
      
      // Inject native CSS variables to strictly sync with current Theme
      svgContent = svgContent.replace(/#ebedf0/g, 'var(--muted)'); // Empty days
      svgContent = svgContent.replace(/#9be9a8/g, 'var(--foreground)'); // Tier 1 (Lightest) - We use opacity via CSS or just raw foreground
      svgContent = svgContent.replace(/#40c463/g, 'var(--foreground)'); // Tier 2
      svgContent = svgContent.replace(/#30a14e/g, 'var(--foreground)'); // Tier 3
      svgContent = svgContent.replace(/#216e39/g, 'var(--foreground)'); // Tier 4 (Darkest)
      
      // Since it is pure monochrome, let's use opacity for intensity tiers
      svgContent = svgContent.replace(/fill="var\(--foreground\)" data-level="1"/g, 'fill="var(--foreground)" style="opacity: 0.25" data-level="1"');
      svgContent = svgContent.replace(/fill="var\(--foreground\)" data-level="2"/g, 'fill="var(--foreground)" style="opacity: 0.50" data-level="2"');
      svgContent = svgContent.replace(/fill="var\(--foreground\)" data-level="3"/g, 'fill="var(--foreground)" style="opacity: 0.75" data-level="3"');
      svgContent = svgContent.replace(/fill="var\(--foreground\)" data-level="4"/g, 'fill="var(--foreground)" style="opacity: 1.00" data-level="4"');
      
    } else {
      svgContent = "<p class='text-muted text-xs text-center w-full'>Failed to load GitHub chart.</p>";
    }
  } catch {
    svgContent = "<p class='text-muted text-xs text-center w-full'>Error loading GitHub chart.</p>";
  }
  
  return (
    <section id="github" className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
        <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-accent pl-4">/github_contributions</h3>
        <a href="https://github.com/juswa005" target="_blank" rel="noopener noreferrer" className="text-accent hover-underline inline-flex items-center gap-2 group font-bold font-mono text-xs ml-4 sm:ml-0">
          <span className="text-muted group-hover:text-accent transition-colors">lrwxrwxrwx</span>
          <span>@juswa005 ↗</span>
        </a>
      </div>
      <a href="https://github.com/juswa005" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full overflow-x-auto overflow-y-hidden border border-border p-3 bg-muted/5 hover-lift">
        <div 
          className="w-full flex justify-center"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </a>
      <p className="pt-3 pl-4 font-mono text-[10px] text-muted uppercase text-center sm:text-left">Real-time dot-matrix GitHub activity</p>
    </section>
  );
}
