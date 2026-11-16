# GOOGLE FLOW IMAGE GENERATION GUIDE
## Generic Indian B.Tech Engineering College Website

This guide provides a comprehensive inventory and individual Google Flow prompts for every image placeholder across all 12 pages of the **B.Tech Engineering College** website.

---

## 1. Visual Style & Generation Guidelines

To maintain institutional consistency across the entire website, adhere strictly to these artistic parameters when generating images in Google Flow:

1. **Photographic Realism**: Realistic editorial architectural and educational documentary photography. Avoid CGI looks, fantasy elements, cartoonish stylings, or overly dramatic artificial lighting.
2. **Context**: Modern Indian engineering college setting. Realistic South Asian students, faculty, and architectural infrastructure reflecting contemporary engineering colleges in Hyderabad, Bengaluru, Chennai, or Pune.
3. **Color Palette & Brand Consistency**:
   - Primary: Deep Navy (`#142B45`) and Engineering Blue (`#1769AA`).
   - Accents: Electric Blue (`#2878D0`), warm sunlight, soft neutral concrete and glass.
   - Secondary Accents: Muted Orange / Warm Amber (`#F29D38`) reflections or lab equipment accents.
4. **Cleanliness & Compliance**:
   - **NO text, numbers, watermarks, or typography** embedded into the image.
   - **NO real or fictional college names, university seals, logos, or crests**.
   - **NO identifiable corporate brand logos** on computer screens, laptops, or machinery.
   - Natural-looking, dignified students and faculty wearing standard formal/semi-formal Indian college attire (neat shirts, lab aprons where relevant).
5. **Aspect Ratio & Composition**:
   - The majority of images are **16:9 Landscape** (1920 × 1080 px or 1200 × 675 px) to ensure responsive rendering across modern displays.
   - Key hero/overview images include negative space for balance.

---

## 2. Image Inventory Summary

| Metric | Count |
| :--- | :--- |
| **Total Required Images** | **63** |
| **Landscape (16:9)** | 62 |
| **Landscape (4:3)** | 1 (`about-campus.webp`) |
| **Portrait / Square** | 0 |
| **Standard File Format** | `.webp` (or `.jpg` converted to `.webp`) |
| **Target Directory** | `assets/images/` |

---

## 3. Recommended Generation Order

1. **Phase 1: Core Hero & Campus Architecture** (`hero-campus.webp`, `campus-building.webp`, `about-campus.webp`, `infrastructure-academic-block.webp`).
2. **Phase 2: Academic & Laboratory Environments** (Computing labs, electronics, robotics, mechanical workshops, civil labs).
3. **Phase 3: Branch & Department Overviews** (`program-*.webp` and `dept-*.webp`).
4. **Phase 4: Student Projects & Prototypes** (`student-project-*.webp`).
5. **Phase 5: Student Life, Sports & Administration** (`campus-life*.webp`, `sports-facilities.webp`, `campus-admin-office.webp`).

---

## 4. Master Image Inventory & Google Flow Prompts

### Page 1: Homepage (`index.html`)

#### 1. `hero-campus.webp`
- **Page / Section**: `index.html` — Hero Section
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1920 × 1080 px
- **Description**: Grand architectural view of a modern Indian engineering college academic block during morning golden hour.
- **Google Flow Prompt**:
  > `Wide-angle architectural photograph of a modern Indian engineering college main campus building at sunrise. Sleek contemporary architecture with glass curtain walls, white concrete louvers, and subtle deep navy blue metal framing. Beautifully manicured green lawns, paved walkway, and native Indian shade trees (neem and gulmohar) in the foreground. Soft warm golden-hour morning lighting, clear blue sky, slight lens flare. Dignified and prestigious higher-education atmosphere. Captured on 35mm lens, f/8, photorealistic, professional institutional architectural photography, clean empty space on the left for text balance, no text, no logos, no watermarks.`

#### 2. `about-campus.webp`
- **Page / Section**: `index.html` — About Section
- **Aspect Ratio**: 4:3 (Landscape) | **Resolution**: 1200 × 900 px
- **Description**: Focused view of the college library and administrative courtyard with Indian engineering students walking with notebooks.
- **Google Flow Prompt**:
  > `Eye-level documentary photograph of an Indian engineering college courtyard and library exterior. 3-4 Indian undergraduate students (male and female, early 20s) in neat smart casual attire walking along an outdoor shaded colonnade holding notebooks and engineering drawing folders. Soft morning sunlight filtering through architectural louvers, subtle navy blue building elements in the background. Natural candid interaction, professional university photography, sharp focus, f/4, 50mm lens, photorealistic, no text, no logos.`

#### 3. `computer-lab.webp`
- **Page / Section**: `index.html` — Infrastructure Preview (also used on `laboratories.html`)
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Modern, clean computer laboratory with rows of sleek desktop workstations and ergonomic chairs.
- **Google Flow Prompt**:
  > `Perspective interior shot of a modern, well-lit Indian university computer laboratory. Clean rows of desktop monitors displaying blurred code terminals and algorithms on dark screens, ergonomic mesh office chairs, organized cable conduits. Bright LED panel ceiling lighting, polished tiled floors with soft reflections, blue and white institutional accent wall. Wide-angle 24mm lens, deep depth of field, pristine, clean educational technology environment, photorealistic, no text, no logos, no watermarks.`

#### 4. `library.webp`
- **Page / Section**: `index.html` — Infrastructure Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Quiet central engineering library with tall book stacks and study tables.
- **Google Flow Prompt**:
  > `Interior photograph of a spacious, modern Indian engineering college central library. Tall wooden bookshelves filled with technical engineering textbooks and scientific journals. Polished wooden study tables with warm individual reading lamps, large glass windows allowing diffused natural daylight. Calm, scholarly atmosphere. Symmetrical composition, architectural interior photography, 35mm lens, photorealistic, no text, no logos.`

#### 5. `seminar-hall.webp`
- **Page / Section**: `index.html` — Infrastructure Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Tiered collegiate auditorium/seminar hall with acoustic wood paneling and blue upholstered seating.
- **Google Flow Prompt**:
  > `Wide-angle interior photograph of an empty, premium university seminar hall and auditorium. Tiered rows of cushioned navy blue lecture seats with integrated writing tablets. Stage with podium, wooden acoustic wall paneling, modern recessed ceiling spot lighting. Symmetrical view from middle aisle toward the presentation stage. Cinematic architectural lighting, pristine educational venue, photorealistic, 24mm lens, no text, no logos.`

#### 6. `student-project-robotics.webp`
- **Page / Section**: `index.html` — Student Projects Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Close-up of an articulated robotic arm prototype on a laboratory bench with circuit boards.
- **Google Flow Prompt**:
  > `Close-up photograph of a metallic 5-axis robotic arm mechanism on a clean wooden laboratory workbench. Surrounding the prototype are microcontrollers with glowing LEDs, neatly arranged multi-colored ribbon cables, and precision screwdrivers. A blurred computer monitor in the background shows schematic diagrams. Focused macro lighting, shallow depth of field (f/2.8), high-tech engineering innovation atmosphere, photorealistic, no text, no logos.`

#### 7. `student-project-iot.webp`
- **Page / Section**: `index.html` — Student Projects Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: IoT environmental sensor node prototype with solar mini-panel and antennas.
- **Google Flow Prompt**:
  > `Clean tabletop photograph of an Internet of Things (IoT) hardware prototype for smart agriculture. A compact weatherproof transparent enclosure containing custom circuit boards, moisture sensor probes, a small solar panel, and a wireless stub antenna. Soft daylight in an electronics research laboratory, shallow depth of field, photorealistic, crisp focus, no text, no logos.`

#### 8. `student-project-ai.webp`
- **Page / Section**: `index.html` — Student Projects Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: High-resolution display showing neural network node visualization and computational computer vision bounding boxes.
- **Google Flow Prompt**:
  > `Sleek high-tech composition of an ultra-wide curved workstation monitor displaying visual representations of deep neural network architectures and 3D bounding box detection graphs in electric blue and cyan colors. Keyboard with subtle white backlighting in the foreground, dark navy ambient laboratory lighting in the background. Crisp, modern computational research visual, photorealistic, 50mm lens, no text, no logos.`

#### 9. `campus-life.webp`
- **Page / Section**: `index.html` — Campus Life Preview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Indian engineering students in casual college attire collaborating around a laptop in a sunlit campus garden.
- **Google Flow Prompt**:
  > `Lively candid photograph of a small diverse group of Indian engineering undergraduate students (two young men, two young women, early 20s) sitting together at a wooden picnic table under the shade of trees on campus. They are reviewing a project on a laptop with smiles and natural engagement. Sunny afternoon light with dappled tree shadows, modern college building in the soft-focus background. Warm, authentic university community atmosphere, editorial photography style, 85mm portrait lens, f/3.2, photorealistic, no text, no logos.`

---

### Page 2: About College (`about.html`)

#### 10. `campus-building.webp`
- **Page / Section**: `about.html` — Institutional Overview
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1600 × 900 px
- **Description**: Front elevation of the flagship academic engineering block under clear daylight.
- **Google Flow Prompt**:
  > `Architectural elevation photograph of a prestigious Indian institute of technology building. Multi-storey concrete and tinted blue glass facade with geometrical sunshades. Central courtyard with flag mast, manicured ornamental shrubs, and paved entrance portico. Clear bright midday sky, crisp clean institutional photography, 28mm architectural tilt-shift perspective, realistic, no text, no logos, no watermarks.`

#### 11. `engineering-classroom.webp`
- **Page / Section**: `about.html` — Academic Approach
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Modern stepped lecture theatre with professor explaining equations on an interactive digital board.
- **Google Flow Prompt**:
  > `Interior photograph of a modern tiered engineering college classroom. Indian professor (mid 40s) standing at the front explaining differential equations and circuit diagrams on a large matte white interactive screen. Indian students seated attentively taking notes on notebooks and laptops. Natural window light from the left side combined with warm indoor ambient lights. Professional higher-education editorial shot, 35mm lens, photorealistic, no text, no logos.`

#### 12. `engineering-students.webp`
- **Page / Section**: `about.html` — Student Community
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Description**: Indian engineering students working together on a collaborative technical design in an innovation lab.
- **Google Flow Prompt**:
  > `Documentary photograph of three Indian engineering students (male and female) standing around a collaborative work table in a modern makerspace. They are assembling electronic components and testing a 3D-printed chassis. Natural expressions of concentration and teamwork. Workshop tools and 3D printers softly blurred in the background. Authentic student research environment, warm natural lighting, 50mm f/2.8 lens, photorealistic, no text, no logos.`

---

### Page 3: B.Tech Programs (`programs.html`)

#### 13. `program-cse.webp`
- **Page / Section**: `programs.html` — Computer Science & Engineering
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `High-angle desk photograph showing dual monitors with elegant software code editors (syntax highlighted in blue and orange), mechanical keyboard, notebook with algorithmic flowcharts, and a warm cup of coffee on a modern minimalist wooden desk. Engineering office environment, clean, inspiring software engineering aesthetic, 35mm f/2.8, photorealistic, no text, no logos.`

#### 14. `program-aiml.webp`
- **Page / Section**: `programs.html` — CSE (AI & Machine Learning)
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `High-tech studio photograph representing machine learning and artificial intelligence. Graphic visualization of glowing multi-layer neural network nodes and data tensors hovering over a physical silicon processor board. Dark navy background with electric blue and amber light accents, photorealistic, cinematic scientific visualization, 50mm lens, no text, no logos.`

#### 15. `program-datascience.webp`
- **Page / Section**: `programs.html` — CSE (Data Science)
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Modern glass office desk setting displaying a high-resolution tablet and monitor featuring complex 3D statistical data visualizations, scatter plots, and distributed pipeline graphs. Clean architectural background, daylight illumination, high-end business intelligence and analytics aesthetic, photorealistic, 50mm f/3.5, no text, no logos.`

#### 16. `program-it.webp`
- **Page / Section**: `programs.html` — Information Technology
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Photograph inside a clean enterprise data center server room. Rows of server racks with blinking blue and green activity LEDs, neatly bundled ethernet patch cables. Tidy raised floor, polished server doors, deep navy perspective with blue ambient glow, photorealistic, 24mm wide angle, no text, no logos.`

#### 17. `program-ece.webp`
- **Page / Section**: `programs.html` — Electronics & Communication Engineering
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Macro photograph of a complex green and gold printed circuit board (PCB) with high-density integrated circuit chips, micro-resistors, and fine copper traces. A fine-tipped soldering iron and precision tweezer rest nearby on an anti-static mat. Dramatic directional side-lighting highlighting circuit topography, photorealistic, 100mm macro lens, no text, no logos.`

#### 18. `program-eee.webp`
- **Page / Section**: `programs.html` — Electrical & Electronics Engineering
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Dramatic industrial photograph of a clean electrical engineering power laboratory. Heavy copper coil transformers, high-voltage switchgear panels, and digital power analyzers on test benches. Clean industrial floor with yellow safety boundary lines, bright industrial lighting, photorealistic, 35mm lens, no text, no logos.`

#### 19. `program-mechanical.webp`
- **Page / Section**: `programs.html` — Mechanical Engineering
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Detailed photograph of modern mechanical engineering design components. Precision machined metallic gears, aluminum bearings, and stainless steel planetary gear assemblies placed on a technical blueprint drafting paper with digital calipers. Warm workshop lighting, crisp metallic textures, photorealistic, 50mm f/4, no text, no logos.`

#### 20. `program-civil.webp`
- **Page / Section**: `programs.html` — Civil Engineering
- **Aspect Ratio**: 16:9 (Landscape) | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Outdoor professional photograph of modern civil engineering surveying equipment. An electronic Total Station on a yellow tripod overlooking a modern geometric concrete bridge and campus building structure under bright morning sunlight. Crisp blue sky, green landscaping, architectural infrastructure aesthetic, 35mm f/5.6, photorealistic, no text, no logos.`

---

### Page 4: Departments (`departments.html`)

#### 21. `dept-cse.webp`
- **Page / Section**: `departments.html` — Department of CSE
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Indian computer science undergraduate students in an engineering lab collaborating over code on multiple screens. Modern collaborative desks with blue chairs, tidy setup, natural daylight from large windows, authentic academic atmosphere, 35mm, photorealistic, no text, no logos.`

#### 22. `dept-aiml.webp`
- **Page / Section**: `departments.html` — Department of AI & ML
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Student research workstation showing high-performance GPU tower with glass panel and subtle blue RGB lighting, dual displays illustrating computer vision facial recognition point-clouds, and robotics sensors on the desk, photorealistic, 50mm lens, no text, no logos.`

#### 23. `dept-datascience.webp`
- **Page / Section**: `departments.html` — Department of Data Science
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Bright modern laboratory room with students and faculty analyzing big data charts and heatmaps projected onto a smart display. Tidy glass-walled academic room with natural outdoor light, photorealistic, 35mm lens, no text, no logos.`

#### 24. `dept-ece.webp`
- **Page / Section**: `departments.html` — Department of ECE
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Electronics communication laboratory workbench with digital storage oscilloscope displaying sine and square signal waveforms in bright green and yellow, surrounded by breadboards and RF test equipment, photorealistic, 50mm f/2.8, no text, no logos.`

#### 25. `dept-eee.webp`
- **Page / Section**: `departments.html` — Department of EEE
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Electrical machines testing room with synchronized AC dynamo units, heavy-duty rotary converters, control consoles, and analog/digital measurement meters on gray stands, photorealistic, 35mm, no text, no logos.`

#### 26. `dept-mechanical.webp`
- **Page / Section**: `departments.html` — Department of Mechanical Engineering
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Spacious engineering machine shop with precision CNC milling machines and heavy lathes. Student with protective safety goggles standing nearby observing a machining demonstration, industrial high-bay lighting, photorealistic, 35mm, no text, no logos.`

#### 27. `dept-civil.webp`
- **Page / Section**: `departments.html` — Department of Civil Engineering
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Civil materials testing laboratory featuring hydraulic compressive testing machine with concrete test cubes, sieve shaker apparatus, and soil density cylinders on sturdy laboratory benches, photorealistic, 35mm, no text, no logos.`

---

### Page 5: Admissions (`admissions.html`)

#### 28. `admissions-counseling.webp`
- **Page / Section**: `admissions.html` — Admissions Overview
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Warm, inviting admissions counseling office in an Indian engineering college. Friendly Indian academic counselor (female, late 30s) speaking with an Indian student and parent across a clean wooden desk. Informational brochures on desk, modern glass partition, warm morning lighting, trustworthy atmosphere, 50mm f/2.8, photorealistic, no text, no logos.`

#### 29. `student-orientation.webp`
- **Page / Section**: `admissions.html` — Student Orientation
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Auditorium view during student orientation day. Rows of prospective young Indian engineering students and families listening attentively to an academic presentation. Clean, dignified collegiate setting, soft stage illumination, 35mm lens, photorealistic, no text, no logos.`

---

### Page 6: Placements (`placements.html`)

#### 30. `placement-interview-hall.webp`
- **Page / Section**: `placements.html` — Career Development Cell
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Modern placement and interview preparation suite. Glass-walled individual interview cubicles, comfortable waiting lounge with blue armchairs, professional corporate training environment, sleek minimalist design, 28mm wide angle, photorealistic, no text, no logos.`

#### 31. `industry-workshop.webp`
- **Page / Section**: `placements.html` — Industry Interaction
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Technical training seminar in a college conference room. Industry instructor in semi-formal shirt presenting software architecture diagrams on a projector screen to attentive engineering seniors with open laptops, photorealistic, 50mm f/3.2, no text, no logos.`

---

### Page 7: Infrastructure (`infrastructure.html`)

#### 32. `infrastructure-academic-block.webp`
- **Page / Section**: `infrastructure.html` — Academic Buildings
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Perspective view of multi-storey modern Indian university academic block with wide corridors, external solar shading fins, polished stone exterior, landscaped palms, bright sunny day, photorealistic, 28mm architectural lens, no text, no logos.`

#### 33. `infrastructure-smart-classrooms.webp`
- **Page / Section**: `infrastructure.html` — Smart Classrooms
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Front-to-back perspective of a high-tech smart classroom with wall-mounted interactive 85-inch digital touchscreen display, ceiling projector, modern tiered student desks with power outlets, photorealistic, 24mm, no text, no logos.`

#### 34. `infrastructure-computer-center.webp`
- **Page / Section**: `infrastructure.html` — Computer Facilities
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Large central computing facility with 80+ neatly organized computer terminals, ergonomic black chairs, anti-static vinyl flooring, glass doors, central air conditioning vents, bright ceiling lighting, photorealistic, 20mm wide angle, no text, no logos.`

#### 35. `infrastructure-library-hall.webp`
- **Page / Section**: `infrastructure.html` — Central Library
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Double-height central library reading hall with mezzanine floor, glass balustrades, rows of technical books, circular study pods, students reading quietly in natural daylight, photorealistic, 24mm, no text, no logos.`

#### 36. `infrastructure-seminar-hall.webp`
- **Page / Section**: `infrastructure.html` — Seminar Hall
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Acoustically engineered seminar hall with dark blue carpeting, upholstered wood-trimmed seats, motorized stage projection screen, warm architectural downlights, photorealistic, 24mm, no text, no logos.`

#### 37. `infrastructure-workshop.webp`
- **Page / Section**: `infrastructure.html` — Workshop Facilities
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `High-ceiling engineering central workshop with designated zones for fitting, carpentry, and welding. Heavy steel workbenches with bench vices, safety signs in yellow, overhead gantry crane, photorealistic, 28mm, no text, no logos.`

#### 38. `sports-facilities.webp`
- **Page / Section**: `infrastructure.html` — Sports Facilities
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Spacious open-air collegiate sports complex featuring lush green cricket ground, synthetic basketball court with crisp white lines, and athletic running track under late afternoon golden hour sky, photorealistic, 35mm, no text, no logos.`

#### 39. `infrastructure-cafeteria-commons.webp`
- **Page / Section**: `infrastructure.html` — Common Areas
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Vibrant student cafeteria and lounge with high industrial ceilings, modern timber tables, large glass facades opening to a green courtyard, students sitting in groups chatting, warm social college atmosphere, photorealistic, 35mm, no text, no logos.`

---

### Page 8: Laboratories (`laboratories.html`)

#### 40. `lab-computer-networks.webp`
- **Page / Section**: `laboratories.html` — Computer Networks Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Specialized computer networking laboratory with open telecom racks, manageable Cisco switches, fiber patch panels with colored cables, and diagnostic testing laptops, photorealistic, 35mm, no text, no logos.`

#### 41. `ai-lab.webp`
- **Page / Section**: `laboratories.html` — AI Laboratory
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Advanced artificial intelligence laboratory with high-performance computational rigs, students working on autonomous navigation and neural network models, cool blue ambient light, photorealistic, 35mm f/2.8, no text, no logos.`

#### 42. `data-science-lab.webp`
- **Page / Section**: `laboratories.html` — Data Science Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Data analytics laboratory setup with multiple monitors displaying data clustering diagrams and regression models, clean white desks, modern institutional research space, photorealistic, 35mm, no text, no logos.`

#### 43. `electronics-lab.webp`
- **Page / Section**: `laboratories.html` — Electronics Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Electronics testing benches with dual-channel oscilloscopes, function generators, DC bench power supplies, soldering station, components organizer trays, photorealistic, 50mm f/3.2, no text, no logos.`

#### 44. `electrical-lab.webp`
- **Page / Section**: `laboratories.html` — Electrical Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Electrical machines laboratory setup with motor-generator sets, load rheostats, safety circuit breakers, industrial meters on gray enameled control panels, photorealistic, 35mm, no text, no logos.`

#### 45. `mechanical-workshop.webp`
- **Page / Section**: `laboratories.html` — Mechanical Workshop
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Precision mechanical workshop with industrial lathes, cutting tools, metal shavings on collection trays, dial gauges, clean workshop maintenance, photorealistic, 35mm, no text, no logos.`

#### 46. `civil-engineering-lab.webp`
- **Page / Section**: `laboratories.html` — Civil Engineering Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Civil materials lab with universal testing machine (UTM) testing concrete cylinder tensile strength, dial gauges, concrete slump test cone on steel plate, photorealistic, 50mm, no text, no logos.`

#### 47. `robotics-lab.webp`
- **Page / Section**: `laboratories.html` — Robotics Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Makerspace robotics laboratory with multiple robotic arms, wheeled autonomous ground rovers on test tracks, 3D printers in operation, tool racks, photorealistic, 35mm f/2.8, no text, no logos.`

---

### Page 9: Research (`research.html`)

#### 48. `research-innovation.webp`
- **Page / Section**: `research.html` — Research Overview
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Modern university innovation and incubation center. Glass-partitioned brainstorming rooms with whiteboards showing system diagrams, students in collaborative discussions, inspiring research atmosphere, photorealistic, 35mm, no text, no logos.`

#### 49. `research-project-lab.webp`
- **Page / Section**: `research.html` — Emerging Tech Lab
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Undergraduate research project workbench featuring renewable energy circuit prototypes, solar power monitoring microcontrollers, and wireless transceivers under soft focused desk lighting, photorealistic, 50mm f/2.8, no text, no logos.`

---

### Page 10: Campus Life (`campus-life.html`)

#### 50. `campus-life-activities.webp`
- **Page / Section**: `campus-life.html` — Campus Life Overview
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Wide shot of university central plaza during midday break. Indian engineering students walking, socializing on stone steps, holding backpacks, trees providing shade, lively collegiate ambiance, photorealistic, 35mm, no text, no logos.`

#### 51. `campus-coding-club.webp`
- **Page / Section**: `campus-life.html` — Coding Club
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `College hackathon scene inside an open hall at night. Groups of young Indian students huddled around laptops with code on screens, energy drinks, whiteboards with architecture diagrams, warm ambient evening lighting, photorealistic, 35mm f/2.4, no text, no logos.`

#### 52. `campus-cultural-fest.webp`
- **Page / Section**: `campus-life.html` — Cultural Activities
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `College open-air auditorium cultural evening fest. Stage with colorful theatrical lighting, students performing music and dance, cheerful student audience clapping, energetic festive university celebration, photorealistic, 50mm, no text, no logos.`

#### 53. `campus-sports-activities.webp`
- **Page / Section**: `campus-life.html` — Sports & Fitness
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Action sports photograph of an intense inter-departmental collegiate basketball match on an outdoor court. Indian student athletes in blue and white jerseys in action, late afternoon sun, dynamic perspective, photorealistic, 85mm f/2.8, no text, no logos.`

---

### Page 11: Student Projects (`student-projects.html`)

#### 54. `student-project-irrigation.webp`
- **Page / Section**: `student-projects.html` — Smart Irrigation
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Automated agricultural test bed in an engineering lab. Soil moisture sensor probe planted into a green potted plant connected to an Arduino microcontroller and a miniature water pump with drip tubing, photorealistic, 50mm f/3.2, no text, no logos.`

#### 55. `student-project-ai-classification.webp`
- **Page / Section**: `student-projects.html` — AI Classification
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Edge computing device with small camera module focused on sorting items on a miniature conveyor belt. Attached small monitor displays real-time computer vision bounding boxes and classification percentages, photorealistic, 50mm, no text, no logos.`

#### 56. `student-project-home-iot.webp`
- **Page / Section**: `student-projects.html` — Home IoT Automation
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Model miniature smart house prototype made of transparent acrylic on a lab bench. Microcontroller board, smart relay switches, and smartphone displaying a control dashboard interface resting nearby, photorealistic, 50mm f/2.8, no text, no logos.`

#### 57. `student-project-traffic.webp`
- **Page / Section**: `student-projects.html` — Smart Traffic Management
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Miniature 4-way urban street intersection model on a table with scaled toy cars and working miniature LED traffic signals controlled by a central microcomputer, photorealistic, 35mm, no text, no logos.`

#### 58. `student-project-solar-energy.webp`
- **Page / Section**: `student-projects.html` — Renewable Energy Monitoring
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Benchtop dual-axis solar tracking prototype with miniature photovoltaic solar panels tilting via small servo motors, digital multimeter reading voltage output under an adjustable lamp, photorealistic, 50mm f/3.5, no text, no logos.`

#### 59. `student-project-robotics-arm.webp`
- **Page / Section**: `student-projects.html` — Robotics Automation
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Precision desktop 5-axis articulated robotic arm lifting a small metallic cube, microcontroller circuit board with neat wiring beside it on a cutting mat, photorealistic, 50mm f/2.8, no text, no logos.`

#### 60. `student-project-attendance.webp`
- **Page / Section**: `student-projects.html` — Attendance Management System
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Compact wall-mountable student attendance prototype device with small wide-angle camera, RFID scanner module, and OLED display screen mounted on an aluminum bracket, photorealistic, 50mm, no text, no logos.`

#### 61. `student-project-water-quality.webp`
- **Page / Section**: `student-projects.html` — Water Quality Monitoring
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Water quality testing floating buoy prototype in a laboratory water tank with submersible pH, turbidity, and temperature probes connected to a telemetry transmitter box, photorealistic, 50mm f/3.2, no text, no logos.`

---

### Page 12: Contact Us (`contact.html`)

#### 62. `campus-admin-office.webp`
- **Page / Section**: `contact.html` — Administrative Office
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Bright, welcoming college administrative reception lobby. Polished granite front desk with neat brochure stands, wooden wall panels, glass entrance doors overlooking green foliage, professional higher-education reception area, 28mm architectural lens, photorealistic, no text, no logos.`

#### 63. `campus-location-map.webp`
- **Page / Section**: `contact.html` — Campus Map
- **Aspect Ratio**: 16:9 | **Resolution**: 1200 × 675 px
- **Google Flow Prompt**:
  > `Architectural schematic 3D master-plan map rendering of a college campus. Clean isometric perspective showing academic blocks, library, sports ground, tree-lined internal roads, and main gate entrance. Minimalist navy, white, and soft gray blueprint aesthetic, clean technical rendering, no text, no logos.`

---

## 5. Instructions for Replacing Placeholders with Actual Images

Once you have generated your images using Google Flow:

1. **Verify Filenames**:
   Ensure each generated image file is named **exactly** as listed in this guide (e.g., `hero-campus.webp`, `about-campus.webp`, etc.).
2. **Copy Files to Assets**:
   Save all generated `.webp` files into the project folder:
   ```
   assets/images/
   ```
3. **Updating the HTML**:
   In each HTML page, locate the placeholder container:
   ```html
   <!-- Before (Placeholder): -->
   <div class="img-placeholder aspect-16-9" data-future-img="hero-campus.webp">
     ...
   </div>
   ```
   Insert the actual image tag directly inside the placeholder container:
   ```html
   <!-- After (With Image): -->
   <div class="img-placeholder aspect-16-9" data-future-img="hero-campus.webp">
     <img src="assets/images/hero-campus.webp" alt="Modern Indian Engineering College Campus" loading="lazy">
   </div>
   ```
   *Note: Because our stylesheet contains `.img-placeholder img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }`, inserting the image tag will seamlessly display the real photograph while preserving responsive layout stability!*
