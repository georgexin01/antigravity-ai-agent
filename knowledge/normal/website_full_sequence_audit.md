# Website Full-Sequence DNA Audit (V6.0)

This repository stores the **Complete Vertical Sequence** of sections for every analyzed website. Unlike "Stored Samples" which are best-of-breed components, this file archives the entire page architecture.

---

## 🏎️ Cluster 1: Xriders (Action/Motorcycle)

### [URL]: https://ex-coders.com/html/xriders/index.html
1. **Navbar** :: `{ [flex|justify-between|items-center|py-4|px-10] + {Logo} + {Nav} + {Icons} + {Btn["UPCOMING EVENT"]} }`
2. **Hero** :: `{ [relative|h-900px|bg-dark] + {BgImage[opacity-50]} + {Content[z-10|flex] {Text[w-1/2] + H1 + P + !Btns} + {Image[relative] + @Deco[red-stripes]} } }`
3. **Services** :: `{ [py-20|bg-light] + {Header} + {Grid_Card[bg-white|p-8|shadow-lg] + {Icon[mt--10]} + H3 + {Link[vertical-text] } * 3 } }`
4. **About** :: `{ [py-20|flex] + {ImageBlock[w-1/2|relative]} + {TextBlock[w-1/2] + Tag + H2 + P + List_Check + Stats + !Btn} }`
5. **Counter** :: `{ [py-16|bg-fixed|bg-cover] + [overlay-dark] + {Grid_4 {Item [Number[outline-text] + Label]} } }`
6. **Testimonial** :: `{ [py-20|bg-light] + {Quotes[bg-red|p-10] + P[italic]} + {Author} + {Avatars} }`
7. **Shop** :: `{ [py-20] + {Header} + {Grid_Product {Card [bg-gray|p-10|hover:actions]} * 4} }`
8. **News** :: `{ [py-20|bg-light] + {Grid_Blog {Card [bg-white|shadow-sm] + @Date[bg-red]} * 3} }`
9. **Event Banner** :: `{ [py-20|bg-dark] + {Content [flex] {Text + Countdown} + {Image[Biker-Action]} } }`
10. **Footer** :: `{ [bg-dark|pt-20] + {Grid_4 [About|Links|Club|Newsletter]} + {Bottom[border-t]} }`

### [URL]: https://ex-coders.com/html/xriders/index-4.html
1. **Hero** :: `HERO[bg-img + MASK] > WRAP > {LOGO[diag-bg] + TOPBAR} + {NAV + CTA} + CONTENT[right-stack]{sub-txt + h1 + p + btn[arrow-icon]}`
2. **Values** :: `VALUES[split-60/40] > WRAP > LEFT[stack]{sub-h[icon] + h2 + p + LIST[numeric]{item{n + h3 + p}}} + RIGHT[media-stack]{img[bordered] + floating-img}`
3. **Services** :: `SERVICES[grid-3] > HEADER[center]{sub-h[icon] + h2} + GRID[cards-stack]{CARD{icon-box + h3 + p + img}}`
4. **Video/Events** :: `VIDEO[full-bg]{sub-txt[icon-left-right] + PLAY_BTN[circle] + COUNTDOWN[row]{unit{val + lbl}}}`
5. **Team** :: `TEAM[slider-3] > HEADER[center]{sub-h[icon] + h2} + GRID[team-cards]{MEMBER{img[overlay] + INFO[inset]{name + role}}}`
6. **Pricing** :: `PRICING[grid-3] > HEADER[split-70/30]{L[stack]{sub-h[icon] + h2} + R{p}} + GRID[plans]{CARD{badge[diag] + h3 + price[large] + p + btn[outline]}}`
7. **Reviews** :: `REVIEWS[paralax-bg] > WRAP[center] > HEADER[stack]{sub-h[icon] + h2} + SLIDER{TESTI_CARD{rating[stars] + p[quote] + USER_INFO[row]{img + info[stack]{name + role}}}}`
8. **Shop** :: `SHOP[grid-4] > HEADER[split-left]{sub-h[icons] + h2} + HEADER[split-right]{btn[split-color]} + GRID[products]{ITEM{badge[red] + img + info[h4 + price]}}`
9. **Gallery** :: `GALLERY[grid-8-col] > ITEM{img[hover-mask]}`
10. **FAQ** :: `FAQ[split-50/50] > LEFT[stack]{sub-h[icon] + h2 + p + BTN_BOX[row]{btn + btn}} + RIGHT[accordion-stack]{ITEM{btn[icon-r] + content}}`
11. **Blog** :: `BLOG[grid-3] > HEADER[center]{sub-h[icon] + h2} + GRID[news-cards]{CARD{img + META[row]{date + comment} + h3 + btn[full-w]}}`
12. **Footer** :: `FOOTER[stack] > TOP[row]{COL{logo + p + CONTACT[row]{icon + info}}} + LINKS[grid-4]{COL{h4 + ul}} + BOTTOM[row]{SUBSCRIBE{lbl + input + btn} + SOCIALS{icon-list}} + COPY[center]{p}`

### [URL]: https://ex-coders.com/html/xriders/index-5.html
1. **Hero** :: `HERO[slider-full] > TOPBAR{info + logo[center] + socials} + NAV_BAR{burger + links + search + cart + call} + CONTENT[left-aligned]{sub-h[icon] + h1[huge] + p + btn[arrow]} + R_BAR[vertical]{links} + PLAY_BTN[floating-bottom]`
2. **Services** :: `SERVICES[grid-3] > HEADER[center]{sub-h[anchor-icons] + h2} + GRID[service-cards]{CARD{img + icon[float-bottom-l] + stack{lbl + h3 + btn[link]}}}`
3. **About** :: `ABOUT[split-45/55] > LEFT[media]{img + BADGE[red-overlay]} + RIGHT[stack]{sub-h[icon] + h2 + p + LIST[cards]{item{icon-box[red] + h3 + p}} + VIDEO_CARD[inset-bottom-r]{img + play-btn}}`
4. **Explore** :: `EXPLORE[slider-full] > HEADER{sub-h + h2 + SLIDE_NAV[row]{prev + next}} + SLIDER{YACHT_CARD{img[overlay] + info[overlay-h4]}}`
5. **Team** :: `TEAM[slider-4] > HEADER[center]{sub-h[icon] + h2} + SLIDER[cards]{MEMBER{img + overlay[socials] + stack{h3 + lbl}}}`
6. **Pricing** :: `PRICING[split-40/60] > LEFT[stack]{sub-h[icon] + h2[huge] + p + lbl + btn} + RIGHT[row]{CARD{h3 + price[large] + LIST[rows]{item{icon + txt}} + btn[link]}}`
7. **Stats/CTA** :: `CTA_STATS[split-mask] > LEFT[mask-img]{img} + RIGHT[dark-stack]{sub-h[icon] + h2 + p + STAT_LIST[stack]{item{lbl + progress_bar}}}`
8. **Testimonials** :: `TESTIMONIALS[slider-overlap] > HEADER[center]{sub-h[icons] + h2} + SLIDE_CONTENT{IMG_BOX[left] + QUOTE_BOX[inset-overlap-r]{rating + p + USER_INFO[stack]{name + role}} + CARD_NAV[dots]}`
9. **Gallery** :: `GALLERY[grid-masonry] > HEADER[center]{sub-h[icons] + h2} + GRID[items]{ITEM{img[overlay-plus]}}`
10. **Blog** :: `BLOG[grid-3] > HEADER[split-80/20]{L[stack]{sub-h[icon] + h2} + R{btn[dual-color]}} + VERT_LABEL[left]{txt} + GRID[news]{CARD{img + BODY[inset-top]{META[row]{date + user} + h3 + link}}}`
11. **Partners** :: `PARTNERS[slider-6] > HEADER[center]{h2} + SLIDER{COL{logo}}`
12. **Footer** :: `FOOTER[stack] > TOP[row]{L[logo + p] + R[newsletter-box]{h3 + input + btn}} + MAIN[grid-4]{COL{h4 + ul}} + BOTTOM[row]{p[copy] + SOCIALS{icon-list}}`

---

## 🚛 Cluster 2: Kargon (Logistics/Industrial)

### [URL]: https://kargonhtml.websitelayout.net/index.html
1. **Navbar** :: `{ [sticky|bg-white|h-24] {Logo + Nav + Actions[!Btn_Quote]} }`
2. **Hero** :: `{ [relative|h-screen|bg-cover] + {Content[animate-up] H1[uppercase] + P + !Btns} }`
3. **Tracking Widget** :: `{ [relative|mt--16|z-10] {Card[shadow-xl|p-10] Input["Tracking Number"] + !Btn_Track} }`
4. **Service Matrix** :: `{ [bg-light] {G_4 {Card[hover-up|bg-white] Icon + H3 + P + Link_Arrow} * 4} }`
5. **About** :: `{ [flex-reverse] {Content_Col H2 + P + List_Check + !Btn} + {Image_Col @Badge_Years} }`
6. **Stats** :: `{ [bg-navy|text-white|py-16] {G_4 {Item Icon + Val[text-primary] + Label} * 4} }`
7. **Process** :: `{ [relative] {Step_4 [text-center] Num[dashed-border] + Icon + H4} + @Line_Dashed[absolute-top] }`
8. **Footer** :: `{ [bg-navy|pt-20] {G_4 [Brand|Services|Contact|Newsletter]} + Copyright }`

### [URL]: https://kargonhtml.websitelayout.net/index-02.html
1. **Hero** :: `HERO[bg-img + MASK] > TOPBAR{LOGO + NAV + SEARCH + CTA[solid-red]} + VERT_LABEL[left]{txt} + CONTENT[center]{h1[huge] + p + BTN_BOX[row]{btn + btn}}`
2. **About** :: `ABOUT[split-50/50] > LEFT[media-stack]{img[bg] + img[offset-top-r]} + RIGHT[stack]{h2[red-span] + p + BTN_BOX[row]{btn + link} + STATS[row]{val[huge] + rating[stars] + lbl}}`
3. **Services** :: `SERVICES[slider-full] > SLIDER{SERVICE_CARD{img + h3[red-underline]}}`
4. **Counters** :: `COUNTERS[parallax-bg] > WRAP > GRID-4{COL{val[huge-scroll] + lbl}}`
5. **Testimonials** :: `TESTIMONIALS[split-50/50] > LEFT[media]{img + BADGE[inset-bottom-l]{val + stars}} + RIGHT[stack]{h2[red-span] + p + SLIDER[quotes]{item{p[quote] + USER[row]{img + info[stack]{name + role}}}} + PROGRESS[circle-btn]}`
6. **Why Choose Us** :: `CHOOS_US[split-50/50] > LEFT[media]{img + PLAY_BTN[large-red]} + RIGHT[stack]{h2[red-span] + p + FEATURE_ROW[row]{icon_box + stack{lbl + p}} + STAT[circle-50]}`
7. **Pricing** :: `PRICING[grid-3] > HEADER[center]{h2[red-span]} + GRID[plans]{CARD{top-border[red] + icon[outline] + h3 + price[large] + p + btn[link]}}`
8. **CTA Banner** :: `CTA_BANNER[parallax] > WRAP[center] > h2[huge-white-red] + CIRCLE_STAT[float-bottom-r]{val}`
9. **Blog** :: `BLOG[grid-3] > HEADER[center]{h2[red-span]} + GRID[news]{CARD{img + DATE_BADGE[top-l] + stack{h3 + meta + btn[link]}}} + FLOAT_STAT[r]{circle-88}`
10. **Footer** :: `FOOTER[stack] > TOP[row]{L[logo] + R[newsletter]{h3 + p + form{input + btn}}} + MAIN[row]{COL{h4 + p} + COL{h4 + mail + tel} + COL{h4 + socials}} + BOTTOM[row]{p[copy] + LINKS[row]{link + link}}`

---

## 💻 Cluster 3: Solvior (IT/Enterprise React)

### [URL]: https://solvior-react.vercel.app/
1. **Top Bar** :: `{ [bg-primary|text-white|py-2] { [container] {Info} + {Select} } }`
2. **Main Header** :: `{ [bg-dark|sticky|py-4] {Logo + Nav + !Btns} }`
3. **Hero** :: `{ [bg-dark|py-20] {Row {Col_6 [badge] + H1 + P + !Btn} | {Col_6 @img_Mockup + @Play_Btn} } }`
4. **Service Carousel** :: `{ [bg-light|py-20] {Swiper {Card_White|p-8|rounded-lg] Icon + Num + H4 + Link} * 4} }`
5. **Work Process** :: `{ [py-20] {Row {Col_6 List_Steps[Num_Circle + H4 + P]} | {Col_6 img_Fluid}} }`
6. **Data Block** :: `{ [bg-dark|text-white|py-20] {G_4 {Counter Num + Label} * 4} }`
7. **Team** :: `{ [bg-light|py-20] {G_4 {Card_White [img-circle] + H5 + Socials} * 4} }`
8. **Enterprise Footer** :: `{ [bg-dark|pt-20] {G_4 [Brand|Nav|Nav|Newsletter]} + Copyright_Bar[border-t] }`

### [URL]: https://solvior-react.vercel.app/home-02
1. **Header** :: `{ [sticky] {Logo + Nav + [row] {Phone + Search + Menu_Btn}} }`
2. **Hero** :: `{ [bg-dark|py-20] {Badge + H1 + !Btn_Consult} | {@img_Overlay + @Shape_Bg} }`
3. **About** :: `{ [py-20] {img_Box + @Badge_Founder + @Badge_Exp} | {H2 + p_Desc + List_Features + !Btn_Consult} }`
4. **Services** :: `{ [bg-light|py-20] {Badge + H2} + {Swiper {Card [icon + title + p + num]} * 4} }`
5. **Stats** :: `{ [py-20] {img_Graph + Badge + H2 + p_Desc} + {G_4 {Counter [num + txt]} * 4} }`
6. **Team** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_4 {Member_Card [img + name + role + socials]} * 4} }`
7. **Logos** :: `{ [py-10] {Badge + H2} + {G_6 {Partner_Logo} * 6} }`
8. **Footer** :: `{ [bg-dark|pt-20] {G_4 [Brand|Links|Contact|Subscribe]} + Copyright }`

### [URL]: https://solvior-react.vercel.app/home-03
1. **Header** :: `{ [sticky] {Logo + Nav + [row] {Search + Menu_Btn + !Btn_Quote}} }`
2. **Hero** :: `{ [bg-dark|py-32] {H1 + p_Desc + !Btn_Scroll} | {img_Main + @Pattern_Bg} }`
3. **Logos** :: `{ [py-10|border-b] {G_6 {Partner_Logo} * 6} }`
4. **About** :: `{ [py-20] {Badge + H2 + p_Desc + List_Points + Feature_Box [icon + title + txt] + !Btn_About} | {img_Side} }`
5. **Video** :: `{ [relative|h-400] {img_Poster + @Btn_Play + @txt_Overlay} }`
6. **Services** :: `{ [bg-light|py-20] {Badge + H2} + {List_Stack {Service_Item [num + title + txt + link]} * 4} }`
7. **Features** :: `{ [py-20] {Badge + H2 + G_2 {Feature_Card [icon + title + txt]} * 4} | {img_Side} }`
8. **Projects** :: `{ [bg-dark|py-20] {Badge + H2} + {Swiper {Project_Card [img + category + title + link]} * 3} }`
9. **Testimonials** :: `{ [bg-light|py-20] {Badge + H2} + {Swiper {Quote_Card [icon + txt + author_img + name + role]} * 3} }`
10. **Blog** :: `{ [py-20] {Badge + H2 + !Btn_More} + {G_3 {Blog_Card [img + date + title + link]} * 3} }`
11. **CTA** :: `{ [bg-primary|py-16] {H2 + !Btn_Contact} }`
12. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Brand|Links|Subscribe]} + Copyright }`

### [URL]: https://solvior-react.vercel.app/home-04
1. **Header** :: `{ [sticky] {Logo + Nav + [row] {Search + Menu_Btn + !Btn_Quote}} }`
2. **Hero** :: `{ [bg-dark|py-20] {Badge + H1 + p_Desc + !Btn_Consult} | {img_Side + @Shape_Bg} }`
3. **Logos** :: `{ [py-10] {G_6 {Partner_Logo} * 6} }`
4. **Features** :: `{ [py-20] {Badge + H2 + p_Desc + G_4 {Feature_Card [icon + title + txt]} * 4} }`
5. **About** :: `{ [bg-light|py-20] {Badge + H2 + p_Desc + List_Points + @Video_Btn} | {img_Main + @img_Secondary} }`
6. **Services** :: `{ [py-20] {Badge + H2} + {Swiper {Service_Card [img + icon + title + txt + link]} * 4} }`
7. **Marquee** :: `{ [bg-primary|py-4] {Ticker [txt + icon_sep] * 10} }`
8. **Case Studies** :: `{ [bg-dark|py-20] {Badge + H2 + !Btn_Explore} + {G_1 {Project_Item [num + title + @img_Reveal]} * 5} }`
9. **Testimonials** :: `{ [bg-light|py-20] {Badge + H2} + {Swiper {Quote_Card [icon + txt + author_img + name + role]} * 3} }`
10. **Team** :: `{ [py-20] {Badge + H2 + !Btn_More} + {G_4 {Member_Card [img + name + role + socials]} * 4} }`
11. **Blog** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_3 {Blog_Card [img + date + title + link]} * 3} }`
12. **Contact** :: `{ [py-20] {Badge + H2 + Info_Block [icon + txt]} | {Form [input + area + btn] + img_Side} }`
13. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Brand|Links|Subscribe]} + Copyright }`

### [URL]: https://solvior-react.vercel.app/home-05
1. **Top Bar** :: `{ [bg-dark|text-white|py-2] {Promo + Link} | {Hours + Email} }`
2. **Header** :: `{ [sticky] {Logo + Nav + [row] {Search + !Btn_Quote}} }`
3. **Hero** :: `{ [relative|h-screen] {H1_Big + @Video_Btn + @Stat_Box [avatars + num + txt]} + {img_Bg} }`
4. **Features** :: `{ [mt--20|z-10] {G_4 {Feature_Item [icon + title + txt]} * 4} }`
5. **About** :: `{ [py-20] {Badge + @H2_Overlay + H2_Main + p_Desc + G_2 {Counter [num + txt]} * 2} | {img_Collage + signature} }`
6. **Services** :: `{ [bg-light|py-20] {Badge + H2 + p_Desc + !Btn_More} + {G_3 {Service_Card [icon + title + txt + arrow]} * 6} }`
7. **Work Process** :: `{ [py-20] {Badge + H2} + {G_4 {Step_Item [num + title + txt + @Line]} * 4} }`
8. **Case Studies** :: `{ [bg-dark|py-20] {Badge + H2 + Tabs} + {G_3 {Project_Card [img + cat + title + arrow]} * 6} }`
9. **Logos** :: `{ [bg-primary|py-8] {Marquee {Logo + txt} * 10} }`
10. **Testimonials** :: `{ [py-20] {Badge + H2} + {Swiper {Quote_Card [icon + txt + author_img + name + role]} * 3} }`
11. **Blog** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_3 {Blog_Card [img + date + title + link]} * 3} }`
12. **CTA** :: `{ [relative|py-24] {img_Bg + H2 + p_Desc + !Btn_Contact} }`
13. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Brand|Links|Subscribe]} + Copyright }`

### [URL]: https://solvior-react.vercel.app/home-06
1. **Header** :: `{ [sticky] {Logo + Nav + [row] {Explore + Menu_Btn + !Btn_Quote}} }`
2. **Hero** :: `{ [bg-dark|py-32] {Badge + H1_Center + p_Desc + !Btn_Group [consult + about]} + {@Dots_L + @Dots_R} }`
3. **Ticker** :: `{ [bg-primary|py-2] {Marquee {Text_Item} * 10} }`
4. **Mission** :: `{ [py-20] {Btn_Mission + Video_Popup [img + play]} + {G_3 {Stat [h2_roll + title + txt]} * 3} }`
5. **Logos** :: `{ [bg-light|py-20] {Badge + H2_Center + G_6 {Partner_Logo} * 6} }`
6. **Portfolio** :: `{ [py-20] {Badge + H2 + !Btn_More} + {Masonry_Grid {Project_Card [img + cat + title + arrow]} * 6} }`
7. **CTA** :: `{ [bg-dark|py-20] {H2 + !Btn_Consult + @Dots} }`
8. **Services** :: `{ [bg-light|py-20] {Badge + H2} + {G_4 {Service_Item [num + title + txt + arrow]} * 4} }`
9. **Process** :: `{ [py-20] {img_Side} | {Badge + H2 + Accordion {Item [num + title + txt]} * 4} }`
10. **Team** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_4 {Member_Card [img + name + role + socials]} * 4} }`
11. **Testimonials** :: `{ [py-20] {Badge + H2} + {Swiper {Quote_Card [icon + txt + author_img + name + role]} * 3} }`
12. **Blog** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_3 {Blog_Card [img + date + title + link]} * 3} }`
13. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Brand|Links|Subscribe]} + Copyright }`

### [URL]: https://solvior-react.vercel.app/home-07
1. **Header** :: `{ [sticky] {Logo + Nav + [row] {!Btn_Quote + Search + Menu_Btn}} }`
2. **Hero** :: `{ [slider-full] {Swiper {Slide [img_bg + H1 + !Btn_Group]} * 3} }`
3. **Mini Features** :: `{ [mt--10|z-10] {G_4 {Feature_Card [icon + title + txt]} * 4} }`
4. **About** :: `{ [py-20] {Badge + H2 + p_Desc + List_Points + @Video_Btn} | {img_Main + @Shape_Bg} }`
5. **Services** :: `{ [bg-light|py-20] {Badge + H2} + {Swiper {Service_Card [img + icon + title + txt + arrow]} * 4} }`
6. **CTA Box** :: `{ [bg-primary|py-12] {H2 + !Btn_Join} + {G_6 {Partner_Logo} * 6} }`
7. **Features Tab** :: `{ [py-20] {Badge + H2 + Tabs} + {Content [img + title + txt + list + !Btn_More]} }`
8. **Case Studies** :: `{ [bg-dark|py-20] {Badge + H2 + !Btn_More} + {G_3 {Project_Card [img + cat + title + arrow]} * 6} }`
9. **Team** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_4 {Member_Card [img + name + role + socials]} * 4} }`
10. **Testimonials** :: `{ [py-20] {Badge + H2} + {Swiper {Quote_Card [icon + txt + author_img + name + role]} * 3} }`
11. **Blog** :: `{ [bg-light|py-20] {Badge + H2 + !Btn_More} + {G_3 {Blog_Card [img + date + title + link]} * 3} }`
12. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Brand|Links|Subscribe]} + Copyright }`

---

## 🏰 Cluster 4: Residem (Luxury Real Estate)

### [URL]: https://madebydesignesia.com/themes/residem/index.html
1. **Nav** :: `{ Logo + Menu + !Btn_Explore }`
2. **Hero** :: `{ [relative|h-screen] {H1 + @Address + !Btn_Group + @Feat_Bar[stats_4]} + {img_Bg} }`
3. **Overview** :: `{ [py-32] {G_2 {Text_Block [badge + H2 + p + !Btn]} | {Icon_Grid [card*2]}} }`
4. **Rooms** :: `{ [bg-dark|py-32] {Badge + H2 + Tabs + @img_Overlay} }`
5. **Gallery** :: `{ [bg-light|py-32] {Badge + H2 + Filters + Masonry_Grid} }`
6. **Floorplan** :: `{ [bg-dark|py-32] {Badge + H2 + p + G_2 {Room_List | Floorplan_SVG} + Stat_Bar} }`
7. **Nearby** :: `{ [bg-light|py-32] {Badge + H2 + G_3 {Card [img + T + dist]} * 3} }`
8. **Contact Hero** :: `{ [relative|py-24] {img_Bg + Badge + H2 + !Btn} }`
9. **Footer** :: `{ [bg-dark|pt-20] {Logo + Address + Socials} + Copyright }`

### [URL]: https://madebydesignesia.com/themes/residem/01_single-property-2.html
1. **Hero** :: `{ [slider-full] {Swiper {Slide [img_bg]} * 3} + @Stat_Bar + @Nav_Arrows }`
2. **Summary** :: `{ [py-32] {G_2 {img_Overlap [img*2]} | {Text_Block [p + list*4]}} }`
3. **Rooms** :: `{ [bg-light|py-32] {Badge + H2 + Tabs} }`
4. **Floorplan** :: `{ [bg-dark|py-32] {Badge + H2 + Stat_Bar} }`

### [URL]: https://madebydesignesia.com/themes/residem/01_single-property-3.html
1. **Hero** :: `{ [bg-light|py-24] {Centered_Media [video/img] + @Title_Block [badge + H1 + address + stats]} }`
2. **Summary** :: `{ [py-32] {G_2 {Text_Block [badge + H2 + p + !Btn]} | {Icon_Grid [card*2]}} }`

### [URL]: https://madebydesignesia.com/themes/residem/01_single-property-4.html
1. **Hero** :: `{ [relative|h-screen] {img_Bg + @Floating_Box [badge + H1 + address + !Btn]} }`
2. **Overview** :: `{ [py-32] {G_2 {Text_Block [badge + H2 + p + !Btn]} | {Icon_Grid [card*2]}} }`

### [URL]: https://madebydesignesia.com/themes/residem/02_apartment-homepage-1.html
1. **Nav** :: `{ Menu_L + Logo_Center + Menu_R + !Btn }`
2. **Hero** :: `{ [slider-full] {Swiper {Slide [img_bg + H1 + address + !Btn]} * 3} + @Slider_Nav }`
3. **Summary** :: `{ [py-32] {G_2 {H2 + p + !Btn} | {Collage_Grid [img*4]}} }`
4. **Facilities** :: `{ [bg-dark|py-32] {Badge + H2 + G_2 {List_Col [item*4]}} }`
5. **Listing** :: `{ [bg-light|py-32] {Badge + H2 + G_3 {Apt_Card [img + title + price + stats + !Btn]} * 3} }`
6. **Map** :: `{ [relative|h-600] {img_Map + @Hotspots [point*4]} }`
7. **Footer** :: `{ [bg-dark|pt-20] {Logo + G_3 {Menu_List} * 3 + Socials} + Copyright }`

### [URL]: https://madebydesignesia.com/themes/residem/03_apartment-rent-onepage.html
1. **Nav** :: `{ [bg-dark] {Logo + Menu + !Btn} }`
2. **Hero** :: `{ [relative|h-screen] {img_Bg + H1 + p + !Btn_Group + @Feat_Bar} }`
3. **About** :: `{ [py-32] {G_2 {Text_Block [badge + H2 + p + !Btn]} | {Collage_Grid [img*4]}} }`
4. **Facilities** :: `{ [bg-dark|py-32] {Badge + H2 + List_Cols} }`

---

## 🎮 Cluster 5: Hoyoverse (Game/Entertainment)

### [URL]: https://hsr.hoyoverse.com/en-us/home
1. **Hero** :: `{ [bg-vdo|char_parallax|action_group|scroll_guide] {layer:5|filter:glass_blur} }`
2. **News** :: `{ [tab_nav|news_list|promo_carousel] {composition:dense|panel:frosted_glass} }`
3. **Characters** :: `{ [v_card_grid|active_char_overlay|explore_btn] {aspect:16_9|hover:expand} }`
4. **Worlds** :: `{ [loc_carousel|lore_panel] {bg:dynamic_parallax|text:tech_font} }`
5. **Media** :: `{ [bento_media_grid|dl_links] {density:4|layout:grid} }`
6. **Footer** :: `{ [sticky_social|email_sub|legal_wrap] {bg:carbon|align:center} }`

### [URL]: https://honkaiimpact3.hoyoverse.com/global/en-us/home
1. **Hero** :: `{ [bg-vdo|splash_art|download_matrix|arrow_scroll] {density:ultra|effect:glitch} }`
2. **News** :: `{ [promo_slider|tabbed_list] {layout:split_40_60|panel:glass_dark} }`
3. **Characters** :: `{ [hero_char_display|nav_sidebar|bio_overlay] {composition:layer_7|blur:dynamic} }`
4. **Scenes** :: `{ [world_slider|locale_text] {interaction:horizontal_scroll|bg:atmosphere} }`
5. **Media** :: `{ [bento_media|wallpaper_tabs] {density:5|layout:modular} }`
6. **Footer** :: `{ [social_stack|sub_form|bottom_legal] {bg:void_black|font:industrial} }`

### [URL]: https://genshin.hoyoverse.com/en/home
1. **Intro** :: `{ [splash_asset|enter_trigger] {density:premium|filter:bloom} }`
2. **Hero** :: `{ [ambient_bg_vdo|splash_foreground|play_group] {layer:6|mask:feathered} }`
3. **News** :: `{ [banner_carousel|tabbed_feed] {layout:asymmetric|panel:glass_translucent} }`
4. **Characters** :: `{ [region_selector|horizontal_char_nav|attribute_icons] {composition:dense|theme:elemental} }`
5. **World** :: `{ [landscape_slider|lore_blurb] {bg:atmospheric|interaction:scroll_reveal} }`
6. **Media** :: `{ [multimedia_tabs|masonry_gallery] {density:5|layout:bento} }`
7. **Footer** :: `{ [social_pill|esrb_stack|legal_text] {bg:antique_paper|text:serif} }`

---

## 🛡️ Cluster 6: Cyber & Tech

### [URL]: https://playhost.on3-step.com/
1. **Header** :: `{ [sticky] Logo + Nav + [row] {Search + User + Cart} + !Btn_Host }`
2. **Hero** :: `{ [slider-full] {Swiper {Slide [img_full + overlay_v + H_XL + p + !Btn_P + @Badge_Price]} * 3} }`
3. **Features** :: `{ [py-20] {G_4 {Card [icon_neon + T_M + p_S + @Hover_Glow]} * 4} }`
4. **About** :: `{ [py-24] {img_Masked_Char} | {Badge + H2 + p + List_Check + !Btn} }`
5. **Catalog** :: `{ [bg-dark|py-20] {Header_Split + G_4 {Game_Card [img + price + T_S + stats + !Btn]} * 8} }`
6. **Stats** :: `{ [bg-neon-violet|py-12] {G_4 {Counter [num + txt]} * 4} }`
7. **Discord** :: `{ [relative|py-20] {img_Bg + @Discord_Icon + H2 + !Btn_Join} }`
8. **Footer** :: `{ [bg-black|pt-20] {G_4 [Brand + Links + Socials + Subscribe]} + Copyright }`

### [URL]: https://html.themeadapt.com/webze/index.html
1. **Header** :: `{ [frosted|sticky] Logo + Nav + !Btn_GetStarted }`
2. **Hero** :: `{ [relative|py-32] {@Halo_Blur + H_Center_XL + p_Center + Form_Group [input + !Btn_Submit]} }`
3. **Logos** :: `{ [py-10] {Marquee {Partner_Logo} * 10} }`
4. **Bento Features** :: `{ [py-20] {G_Bento {Card_LG [glass] + Card_SM [graphic] * 2 + Card_MD [stat]}} }`
5. **Process** :: `{ [bg-light|py-20] {Badge + H2 + G_3 {Step_Card [num + T + p]} * 3} }`
6. **Roadmap** :: `{ [relative|py-20] {Timeline_V + {Node [date + T + p]} * 5} }`
7. **Footer** :: `{ [bg-dark|pt-20] {G_3 [Logo_Col + Links + Newsletter]} + Copyright }`

### [URL]: https://expert-themes.com/html/ithub/index.html
1. **Nav** :: `{ Logo + Nav + !Btn_Connect }`
2. **Hero** :: `{ [py-24] {H_L + !Btn_Pair [blue + outline]} | {img_Mockup_Perspective} }`
3. **Services** :: `{ [bg-light|py-20] {Badge + H2 + G_4 {Card_Icon [icon_grad + T_M + p_S + arrow]} * 4} }`
4. **Tech Stack** :: `{ [py-10] {Swiper {Tech_Icon} * 12} }`
5. **About** :: `{ [py-20] {img_Main} | {Badge + H2 + p + G_2 {Stat [num + txt]} * 2} }`
6. **Portfolio** :: `{ [py-20] {Badge + H2 + Masonry_Mosaic [img + hover_info] * 6} }`
7. **CTA** :: `{ [bg-primary|py-16] {H2_White + !Btn_Consult} }`

### [URL]: https://madebydesignesia.com/themes/cyberguard/index.html
1. **Header** :: `{ TopBar + MainNav [sticky] + !Btn_Emergency }`
2. **Hero** :: `{ [slider-full] {Swiper {Slide [img_bg + overlay_blue + H_Center_L + p + !Btn_Dual]} * 3} }`
3. **Core Features** :: `{ [mt--12|z-10] {G_3 {Feature_Card [icon_cyan + T + p + link]} * 3} }`
4. **Analysis** :: `{ [py-20] {img_Abs_Shield} | {H2 + p + List_Points + !Btn_Cyan} }`
5. **Compliance** :: `{ [bg-light|py-20] {Badge + H2 + G_4 {Comp_Icon} * 8} }`
6. **Counters** :: `{ [bg-navy|py-12] {G_4 {Stat [num + txt]} * 4} }`
