/* CARVA website — bilingual (AR/EN) SPA logic
   Base44-compliant: estimates only, WhatsApp is the only channel, no auto-send. */
'use strict';

/* ── I18N dictionary ── */
const I18N = {
  ar: {
    'nav.services':'خدماتنا','nav.how':'كيف نعمل','nav.request':'اطلب الآن','nav.policies':'السياسات',
    'nav.parts':'قطع الغيار','nav.rescue':'الإنقاذ','nav.insurance':'التأمين','nav.tyres':'الإطارات',
    'top.wa':'واتساب',
    'hero.badge':'منصة السيارات الشاملة في البحرين',
    'hero.title':'كل ما تحتاجه سيارتك.<br><span class="grn">أنت تطلب. ونحن نجد.</span>',
    'hero.lead':'غسيل وتلميع في مكانك، قطع غيار من أي مكان، استيراد السيارات، وخدمة إنقاذ تصل إلى باب بيتك — كل ذلك عبر واتساب بأسعار تقديرية واضحة.',
    'hero.cta1':'اطلب خدمة الآن','hero.cta2':'تواصل معنا مباشرة',
    'hero.stat1n':'4','hero.stat1l':'خدمات متكاملة','hero.stat2l':'تأكيد عبر واتساب','hero.stat3l':'نغطي البحرين',
    'hero.card.title':'خدمة الإنقاذ CARVA','hero.card.price':'سعر تقديري • Estimated',
    'hero.card.l1':'ننقل سيارتك لأي فني تختاره','hero.card.l2':'نعيدها لبيتك بعد الإصلاح','hero.card.l3':'الإصلاح بواسطة فني خارجي',
    'services.tag':'خدماتنا','services.title':'ست خدمات. حل واحد.',
    'services.sub':'كل ما تحتاجه سيارتك في مكان واحد — نطلب، نجد، ننفذ. الأسعار كلها تقديرية وتُؤكَّد عبر واتساب.',
    'parts.tag':'قطع الغيار','parts.title':'قطع غيار أصلية. من أي مكان في العالم.',
    'parts.sub':'نستورد أي قطعة تحتاجها — من الفرامل إلى المصابيح — بأفضل جودة وسعر تقديري شفاف.',
    'rescue.title':'تعطلت سيارتك؟ نحن ننقذها.',
    'rescue.desc':'ننقل سيارتك إلى أي فني تختاره، وبعد الإصلاح نعيدها إلى باب بيتك.',
    'rescue.s1':'نستلم موقعك وتفاصيل سيارتك','rescue.s2':'ننقلها لأي فني تختاره (أو نرشح لك)',
    'rescue.s3':'الإصلاح بواسطة فني خارجي','rescue.s4':'نعيدها لبيتك بعد الإصلاح',
    'rescue.note':'CARVA تتكفل بالنقل والتنسيق — الإصلاح مسؤولية الفني الخارجي.',
    'rescue.cta':'طلب الإنقاذ الآن',
    'gallery.tag':'معرض','gallery.title':'شغفنا بالتفاصيل',
    'prop1t':'جودة متميزة','prop1d':'خدمة بمعايير عالية','prop2t':'شبكة موثوقة','prop2d':'شركاء وفنيون معتمدون',
    'prop3t':'نوفر وقتك','prop3d':'طلبات سريعة عبر واتساب','prop4t':'دائماً معك','prop4d':'دعم على مدار الأسبوع',
    'prop5t':'مقرنا في البحرين','prop5d':'نغطي كل المناطق',
    'svc.est':'سعر تقديري • Estimated','svc.link':'اطلب عرض سعر',
    'how.tag':'كيف نعمل','how.title':'من الطلب إلى التنفيذ في 4 خطوات',
    'how.sub':'عملية واضحة ومباشرة — بلا اتصالات متكررة وبلا مفاجآت.',
    'req.tag':'اطلب الآن','req.title':'اطلب خدمتك واحصل على تقدير',
    'req.sub':'عبّئ النموذج وسنولّد لك رسالة واتساب جاهزة بكل التفاصيل — تراجعها وترسلها، ونرد عليك لتأكيد السعر التقديري.',
    'req.wa':'فتح واتساب للتأكيد','req.copy':'نسخ الرسالة','req.preview':'معاينة رسالتك',
    'req.previewSub':'رسالتك لـ CARVA عبر واتساب — يمكنك تعديلها قبل الإرسال',
    'req.estNote':'الأسعار تقديرية فقط وتُؤكَّد نهائياً عبر واتساب بعد مراجعة التفاصيل.',
    'pol.tag':'السياسات','pol.title':'شفافية كاملة','pol.sub':'سياسات واضحة تحمي حقوقك قبل وبعد الخدمة.',
    'foot.about':'منصة السيارات الشاملة في البحرين — نغسل، نلمّع، نستورد، نؤمّن، نبدّل الإطارات، وننقذ. أسعار تقديرية وتأكيد عبر واتساب.',
    'foot.col1':'الخدمات','foot.col2':'روابط','foot.l1':'غسيل وتلميع','foot.l2':'استيراد قطع الغيار',
    'foot.l3':'استيراد السيارات','foot.l4':'خدمة الإنقاذ RESCUE','foot.l8':'التأمين على السيارات','foot.l9':'تبديل الإطارات','foot.l5':'سياسة الخصوصية',
    'foot.l6':'سياسة الضمان والاسترجاع','foot.l7':'اطلب خدمة','foot.rights':'جميع الحقوق محفوظة',
    'f.name':'الاسم','f.phone':'رقم الهاتف','f.make':'ماركة السيارة','f.model':'الموديل','f.year':'السنة',
    'f.color':'اللون','f.area':'المنطقة / الموقع','f.date':'التاريخ المفضل','f.time':'الوقت المفضل','f.notes':'ملاحظات',
    'f.level':'مستوى الخدمة','f.level0':'غسيل خارجي','f.level1':'تنظيف داخلي وخارجي شامل','f.level2':'تلميع وطبقة حماية',
    'f.part':'اسم القطعة','f.partno':'رقم القطعة (إن وجد)','f.origin':'بلد المنشأ','f.budget':'الميزانية التقريبية',
    'f.budget0':'أقل من 3000 د.ب','f.budget1':'3000 - 6000 د.ب','f.budget2':'6000 - 10000 د.ب','f.budget3':'أكثر من 10000 د.ب',
    'f.ref':'رابط أو صورة مرجعية','f.tech':'تفضيل الفني','f.tech0':'أي فني متاح','f.tech1':'فني أختاره أنا',
    'f.insType':'نوع التأمين المطلوب','f.insType0':'تأمين ضد الغير (إلزامي)','f.insType1':'تأمين شامل','f.insType2':'لست متأكداً — أرشحوني الأنسب',
    'f.insPref':'تفضيل شركة التأمين','f.insPref0':'أي شركة مضمونة — اختروا لي الأفضل','f.insPref1':'لدي شركة محددة بذهني (أذكرها في الملاحظات)',
    'f.tyreSize':'مقاس الإطارات (مثال: 205/55 R16)','f.tyreBrand':'الماركة / الفئة المفضلة','f.tyreBrand0':'اقتصادية — أفضل سعر','f.tyreBrand1':'متوسطة — توازن جودة وسعر','f.tyreBrand2':'مميزة — الأفضل أداءً','f.tyreBrand3':'نفس ماركة إطاراتي الحالية',
    'f.tyrePlace':'مكان التبديل','f.tyrePlace0':'في موقعي (خدمة متنقلة)','f.tyrePlace1':'عند الشريك المعتمد',
    'f.photo':'أضف صورة (اختياري — تساعدنا على التسعير أسرع)','f.hintYear':'مثال: 2021',
    'f.req':'*','f.waNote':'لا يُرسل شيء تلقائياً — يفتح واتساب للمراجعة',
    'err.phone':'الرجاء إدخال رقم هاتف بحريني صحيح (8 أرقام)',
    'msg.photo':'📎 سأرفق صورة في المحادثة',
    'copy.done':'تم النسخ ✓',
  },
  en: {
    'nav.services':'Services','nav.how':'How it works','nav.request':'Request now','nav.policies':'Policies',
    'nav.parts':'Parts','nav.rescue':'Rescue','nav.insurance':'Insurance','nav.tyres':'Tyres',
    'top.wa':'WhatsApp',
    'hero.badge':'Bahrain\'s automotive super platform',
    'hero.title':'Everything your car needs.<br><span class="grn">You ask. We find.</span>',
    'hero.lead':'Wash & polish at your door, parts from anywhere, car imports, insurance through trusted insurers, tyre change, and a rescue service that brings your car home — all via WhatsApp with clear estimates.',
    'hero.cta1':'Request a service','hero.cta2':'Chat with us',
    'hero.stat1n':'4','hero.stat1l':'Integrated services','hero.stat2l':'WhatsApp confirmation','hero.stat3l':'Covers all Bahrain',
    'hero.card.title':'CARVA RESCUE','hero.card.price':'Estimated price',
    'hero.card.l1':'We take your car to any technician you choose','hero.card.l2':'We return it home after repair','hero.card.l3':'Repair done by an external technician',
    'services.tag':'Our services','services.title':'Six services. One solution.',
    'services.sub':'Everything your car needs in one place — we ask, we find, we deliver. All prices are estimates confirmed via WhatsApp.',
    'parts.tag':'Parts','parts.title':'Genuine parts. From anywhere in the world.',
    'parts.sub':'We import any part you need — from brakes to headlights — with the best quality and a transparent estimate.',
    'rescue.title':'Car broken down? We\'ve got you.',
    'rescue.desc':'We take your car to any technician you choose, and return it home after repair.',
    'rescue.s1':'We take your location & car details','rescue.s2':'We move it to any technician you choose (or recommend one)',
    'rescue.s3':'Repair done by an external technician','rescue.s4':'We return it home after the repair',
    'rescue.note':'CARVA handles the transport & coordination — the repair is the technician\'s responsibility.',
    'rescue.cta':'Request Rescue now',
    'gallery.tag':'Gallery','gallery.title':'Our passion for detail',
    'prop1t':'Premium Quality','prop1d':'High-standard service','prop2t':'Trusted Network','prop2d':'Vetted partners & technicians',
    'prop3t':'Saves You Time','prop3d':'Fast WhatsApp requests','prop4t':'Always Here','prop4d':'Support all week',
    'prop5t':'Based in Bahrain','prop5d':'Covering all areas',
    'svc.est':'Estimated','svc.link':'Request an estimate',
    'how.tag':'How it works','how.title':'From request to delivery in 4 steps',
    'how.sub':'A clear, direct process — no phone tag, no surprises.',
    'req.tag':'Request now','req.title':'Request your service & get an estimate',
    'req.sub':'Fill the form and we\'ll build a ready WhatsApp message with all details — review it, send it, and we\'ll reply to confirm your estimate.',
    'req.wa':'Open WhatsApp to confirm','req.copy':'Copy message','req.preview':'Your message preview',
    'req.previewSub':'Your message to CARVA on WhatsApp — you can edit before sending',
    'req.estNote':'Prices are estimates only, confirmed via WhatsApp after reviewing the details.',
    'pol.tag':'Policies','pol.title':'Full transparency','pol.sub':'Clear policies that protect you before and after the service.',
    'foot.about':'Bahrain\'s automotive super platform — we wash, polish, import, insure, fit tyres, and rescue. Estimated pricing, WhatsApp confirmation.',
    'foot.col1':'Services','foot.col2':'Links','foot.l1':'Wash & Polish','foot.l2':'Spare Parts Import',
    'foot.l3':'Car Import','foot.l4':'CARVA RESCUE','foot.l8':'Car Insurance','foot.l9':'Tyre Change','foot.l5':'Privacy Policy',
    'foot.l6':'Warranty & Return Policy','foot.l7':'Request a service','foot.rights':'All rights reserved',
    'f.name':'Name','f.phone':'Phone number','f.make':'Car make','f.model':'Model','f.year':'Year',
    'f.color':'Color','f.area':'Area / Location','f.date':'Preferred date','f.time':'Preferred time','f.notes':'Notes',
    'f.level':'Service level','f.level0':'Exterior wash','f.level1':'Full interior + exterior detail','f.level2':'Polish & ceramic coating',
    'f.part':'Part name','f.partno':'Part number (if known)','f.origin':'Origin country','f.budget':'Approx. budget',
    'f.budget0':'Under 3,000 BHD','f.budget1':'3,000 - 6,000 BHD','f.budget2':'6,000 - 10,000 BHD','f.budget3':'Over 10,000 BHD',
    'f.ref':'Reference link or photo','f.tech':'Technician preference','f.tech0':'Any available technician','f.tech1':'A technician of my choice',
    'f.insType':'Required coverage type','f.insType0':'Third-party (mandatory)','f.insType1':'Comprehensive','f.insType2':'Not sure — recommend the best fit',
    'f.insPref':'Insurer preference','f.insPref0':'Any trusted insurer — pick the best for me','f.insPref1':'I have a specific insurer in mind (I\'ll note it below)',
    'f.tyreSize':'Tyre size (e.g. 205/55 R16)','f.tyreBrand':'Preferred brand / tier','f.tyreBrand0':'Budget — best price','f.tyreBrand1':'Mid-range — quality/price balance','f.tyreBrand2':'Premium — best performance','f.tyreBrand3':'Same brand as my current tyres',
    'f.tyrePlace':'Fitting location','f.tyrePlace0':'At my location (mobile service)','f.tyrePlace1':'At the vetted partner garage',
    'f.photo':'Add a photo (optional — helps us quote faster)','f.hintYear':'e.g. 2021',
    'f.req':'*','f.waNote':'Nothing is sent automatically — WhatsApp opens for your review',
    'err.phone':'Please enter a valid Bahrain phone number (8 digits)',
    'msg.photo':'📎 I\'ll attach a photo in the chat',
    'copy.done':'Copied ✓',
  }
};

/* ── Services data ── */
const SERVICES = [
  {
    id:'wash', img:'card-care.webp', icon:'M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11m-14 0h14v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5zm1.5 0h15l-1.4-3.6a.5.5 0 0 0-.5-.3H6.4a.5.5 0 0 0-.5.3L5 11zM7 15.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm10 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z',
    name:{ar:'غسيل وتلميع السيارات',en:'Car Wash & Polishing'},
    desc:{ar:'غسيل وتلميع احترافي في موقعك: غسيل خارجي، تنظيف داخلي شامل، تلميع وطبقات حماية سيراميكية. ننفذها بأنفسنا في مكانك.',en:'Professional wash & polishing at your location: exterior wash, full interior detail, polishing and ceramic coating levels. Performed by CARVA directly at your door.'},
    steps:{ar:['اختر مستوى الخدمة','أدخل بيانات سيارتك وموقعك','استلم التقدير عبر واتساب','نصل وننفذ الخدمة في مكانك'],en:['Choose your service level','Enter vehicle info & location','Get your estimate on WhatsApp','We arrive and perform the service']},
    extra:[{k:'level',t:'f.level',type:'select',opts:['f.level0','f.level1','f.level2']}]
  },
  {
    id:'part', img:'card-parts.webp', icon:'M12 3a1 1 0 0 1 1 1v1.1a5 5 0 0 1 1.6.6l1-.6a1 1 0 0 1 1.4.3l1.4 2.4a1 1 0 0 1-.3 1.4l-.9.6a5 5 0 0 1 0 1.2l.9.6a1 1 0 0 1 .3 1.4l-1.4 2.4a1 1 0 0 1-1.4.3l-1-.6a5 5 0 0 1-1.6.6V19a1 1 0 0 1-2 0v-1.1a5 5 0 0 1-1.6-.6l-1 .6a1 1 0 0 1-1.4-.3l-1.4-2.4a1 1 0 0 1 .3-1.4l.9-.6a5 5 0 0 1 0-1.2l-.9-.6a1 1 0 0 1-.3-1.4l1.4-2.4a1 1 0 0 1 1.4-.3l1 .6a5 5 0 0 1 1.6-.6V4a1 1 0 0 1 1-1zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    name:{ar:'استيراد قطع الغيار',en:'Spare Parts Import & Supply'},
    desc:{ar:'نوفر أي قطعة غيار (أصلية أو بديلة) لأي سيارة — محلياً أو استيراداً من أي مكان، مع التوصيل حتى بابك أو الاستلام منا.',en:'We source any part (OEM or aftermarket) for any car — locally or imported from anywhere, delivered to your door or ready for pickup.'},
    steps:{ar:['حدد القطعة (الماركة/الموديل/السنة أو رقم القطعة)','أضف صورة للقطعة إن أمكن','استلم التقدير عبر واتساب','نورد القطعة أو نستوردها ونوصلها'],en:['Describe the part (make/model/year or part number)','Add a photo if possible','Get your estimate on WhatsApp','We supply or import and deliver it']},
    extra:[{k:'part',t:'f.part',type:'text',req:true},{k:'partno',t:'f.partno',type:'text'},{k:'photo',t:'f.photo',type:'file'}]
  },
  {
    id:'import', img:'card-cars.webp', icon:'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.9 9h-3.1a15.6 15.6 0 0 0-1.3-5.9A8 8 0 0 1 19.9 11zM12 3.9A14.8 14.8 0 0 1 13.7 11h-3.4A14.8 14.8 0 0 1 12 3.9zm0 16.2A14.8 14.8 0 0 1 10.3 13h3.4A14.8 14.8 0 0 1 12 20.1zM9.5 5.1A15.6 15.6 0 0 0 8.2 11H5.1a8 8 0 0 1 4.4-5.9zM5.1 13h3.1a15.6 15.6 0 0 0 1.3 5.9A8 8 0 0 1 5.1 13zm9.4 5.9a15.6 15.6 0 0 0 1.3-5.9h3.1a8 8 0 0 1-4.4 5.9z',
    name:{ar:'استيراد السيارات',en:'Car Import'},
    desc:{ar:'السيارة التي تريدها خارج البحرين؟ نستوردها ونوصلها لك. الوقت والتكلفة تقديريان، والرسوم الجمركية تتوضح بالكامل في عرض السعر عبر واتساب.',en:'The car you want is outside Bahrain? We import it and deliver it to you. Time and cost are estimates; customs and fees are fully clarified in the WhatsApp quote.'},
    steps:{ar:['حدد السيارة (الموديل/السنة/بلد المنشأ)','أضف رابطاً أو صورة مرجعية','استلم التقدير مع تفاصيل الجمارك','نستورد ونوصل سيارتك للبحرين'],en:['Specify the car (model/year/origin)','Add a reference link or photo','Get your estimate with customs details','We import and deliver your car in Bahrain']},
    extra:[{k:'origin',t:'f.origin',type:'text',req:true},{k:'budget',t:'f.budget',type:'select',opts:['f.budget0','f.budget1','f.budget2','f.budget3']},{k:'ref',t:'f.ref',type:'text'}]
  },
  {
    id:'rescue', img:'rescue-banner.webp', icon:'M12 2l7 3.5v5.2c0 5-3.4 9.6-7 11.3-3.6-1.7-7-6.3-7-11.3V5.5L12 2zm-1 14l6-6-1.4-1.4-4.6 4.6-2.2-2.2L7.4 12 11 15.6z',
    name:{ar:'خدمة الإنقاذ RESCUE',en:'CARVA RESCUE'},
    desc:{ar:'سيارتك تعطلت في أي مكان بالبحرين؟ ننقلها لأي فني صيانة تختاره (أو نرشح لك)، وبعد الإصلاح نعيدها لبيتك. كارفا تتكفل بالنقل — الصيانة بواسطة فني خارجي.',en:'Car broken down anywhere in Bahrain? We take it to any technician you choose (or recommend one), and return it home after repair. CARVA handles the logistics — the repair is done by an external technician.'},
    steps:{ar:['أرسل موقعك وتفاصيل سيارتك','كارفا تنقل السيارة للفني الذي تختاره','الإصلاح بواسطة الفني الخارجي','نعيد سيارتك إلى باب بيتك'],en:['Send your location & car details','CARVA moves the car to your chosen technician','Repair done by the external technician','We return your car to your home']},
    extra:[{k:'tech',t:'f.tech',type:'select',opts:['f.tech0','f.tech1']},{k:'photo',t:'f.photo',type:'file'}]
  },
  {
    id:'insurance', img:'card-find.webp', icon:'M12 2l8 3.5v5.2c0 5-3.4 9.6-8 11.3-4.6-1.7-8-6.3-8-11.3V5.5L12 2zm0 15.5l4.5-4.5-1.4-1.4-3.1 3.1-1.6-1.6-1.4 1.4 3 3z',
    name:{ar:'التأمين على السيارات',en:'Car Insurance'},
    desc:{ar:'نتعامل مع شركات تأمين مضمونة ومرخصة في البحرين — نرشح لك أفضل عرض يناسب سيارتك وميزانيتك، وننسّق كل الإجراءات نيابة عنك. وثيقة التأمين صادرة عن شركة التأمين.',en:'We work with trusted, licensed insurance companies in Bahrain — we recommend the best offer for your car and budget, and handle all the paperwork for you. The policy is issued by the insurance company.'},
    steps:{ar:['أرسل بيانات سيارتك ونوع التأمين المطلوب','نقارن لك عروض شركات التأمين المضمونة','نرسل لك أفضل عرض تقديري عبر واتساب','ننسّق الإصدار ونوصل لك الوثيقة'],en:['Send your car details & required coverage type','We compare offers from trusted insurance companies','You get the best estimated offer on WhatsApp','We coordinate issuance and deliver your policy']},
    extra:[{k:'insType',t:'f.insType',type:'select',opts:['f.insType0','f.insType1','f.insType2']},{k:'insPref',t:'f.insPref',type:'select',opts:['f.insPref0','f.insPref1']},{k:'photo',t:'f.photo',type:'file'}]
  },
  {
    id:'tyres', img:'care-detail.webp', icon:'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    name:{ar:'تبديل الإطارات',en:'Tyre Change'},
    desc:{ar:'نوفر ونبدّل إطارات سيارتك بأحجام وماركات تناسب سيارتك وميزانيتك — في موقعك أو عند أحد شركائنا المعتمدين. التنفيذ بواسطة فنيين معتمدين ونحتّم لك الفحص والموازنة.',en:'We supply and change your tyres in sizes and brands that suit your car and budget — at your location or at a vetted partner garage. Fitted by certified technicians, including balancing and alignment check.'},
    steps:{ar:['أرسل مقاس الإطارات أو صورة منها (أو سيارتك)','نرشح لك أفضل الخيارات المتوفرة بالسعر التقديري','نحدد موعد التبديل في مكانك أو عند الشريك','نبدّلها ونوازنها ونتخلص من القديمة'],en:['Send your tyre size or a photo (or your car details)','We recommend the best available options with an estimate','We schedule the change at your place or the partner garage','Fitted, balanced, and old tyres disposed of']},
    extra:[{k:'tyreSize',t:'f.tyreSize',type:'text',req:true},{k:'tyreBrand',t:'f.tyreBrand',type:'select',opts:['f.tyreBrand0','f.tyreBrand1','f.tyreBrand2','f.tyreBrand3']},{k:'tyrePlace',t:'f.tyrePlace',type:'select',opts:['f.tyrePlace0','f.tyrePlace1']},{k:'photo',t:'f.photo',type:'file'}]
  }
];

/* ── How steps & policies data ── */
const HOW = [
  {n:'01',t:{ar:'اطلب الخدمة',en:'Request the service'},d:{ar:'اختر الخدمة وعبّئ النموذج بالتفاصيل',en:'Pick a service and fill in the details'}},
  {n:'02',t:{ar:'استلم التقدير',en:'Get your estimate'},d:{ar:'رسالة واتساب جاهزة — نرد عليك بسعر تقديري',en:'A ready WhatsApp message — we reply with an estimate'}},
  {n:'03',t:{ar:'أكّد عبر واتساب',en:'Confirm on WhatsApp'},d:{ar:'نراجع التفاصيل معك ونؤكد السعر النهائي',en:'We review the details and confirm the final price'}},
  {n:'04',t:{ar:'ننفذ ونسلّم',en:'We deliver'},d:{ar:'ننفذ الخدمة في مكانك أو نوصل لك ما طلبت',en:'We perform the service or deliver what you asked for'}}
];

const POLICIES = [
  {
    id:'privacy', name:{ar:'سياسة الخصوصية',en:'Privacy Policy'},
    items:{ar:['نجمع فقط ما يلزم لتنفيذ الطلب: الاسم، الهاتف، بيانات السيارة، الموقع، والصور التي ترفعها.','تُستخدم البيانات لمعالجة الطلبات وخدمة العملاء فقط — ولا تُباع أبداً.','لا نخزن أي بيانات دفع — الدفع يتم نقداً أو عبر BenefitPay أو Apple Pay على المبلغ المؤكد.','يمكنك طلب حذف بياناتك في أي وقت عبر واتساب.'],en:['We collect only what is needed to fulfill orders: name, phone, vehicle details, location, and photos you upload.','Data is used only for order processing and customer service — never sold.','No payment details are stored — payment is via cash, BenefitPay, or Apple Pay on the confirmed amount.','You may request deletion of your data at any time via WhatsApp.']}
  },
  {
    id:'warranty', name:{ar:'سياسة الضمان والاسترجاع',en:'Warranty & Return Policy'},
    items:{ar:['قطع الغيار: مغطاة بضمان المصنع/المورد، وتُستبدل المعيبة ضمن فترة الضمان. القطع غير المستخدمة تُرجع خلال 7 أيام.','الغسيل والتلميع: إن لم تكن النتيجة مطابقة للمستوى المتفق عليه، نعيد التنفيذ فوراً.','استيراد السيارات: خدمة خاصة — الإلغاء بعد دفع العربون وفق الشروط المتفق عليها في عرض الواتساب.','الإنقاذ: كارفا تغطي النقل، وضمان الإصلاح مسؤولية الفني — وكارفا تتوسط لصالحك عند أي إشكالية.','التأمين: وثيقة التأمين ومطالبات التعويض مسؤولية شركة التأمين المصدرة وفق شروط الوثيقة — كارفا تنسّق وتدعمك في التقديم والمتابعة.','تبديل الإطارات: الإطارات الجديدة مغطاة بضمان الشركة المصنّعة. خدمة التركيب والموازنة تُعاد مجاناً إذا ظهر خلل في التنفيذ.'],en:['Spare parts: covered by the manufacturer/supplier warranty; defective parts are replaced within the warranty window. Unused parts returnable within 7 days.','Wash & polishing: if the result doesn\'t meet the agreed level, we redo it on the spot.','Car import: bespoke service — cancellation after deposit follows the terms agreed in the WhatsApp quote.','RESCUE: CARVA covers transport; the repair warranty is the technician\'s — CARVA mediates on your behalf if an issue arises.','Insurance: the policy and any claims are the responsibility of the issuing insurance company per the policy terms — CARVA coordinates and supports you through application and follow-up.','Tyre change: new tyres carry the manufacturer\'s warranty. Fitting and balancing are redone free of charge if a workmanship defect appears.']}
  }
];

/* ── Parts / Gallery / Props data ── */
const PARTS = [
  {img:'part-brake.webp', ar:'قرص فرامل', en:'Brake Disc'},
  {img:'part-engine.webp', ar:'محرك V8', en:'Engine'},
  {img:'part-wheel.webp', ar:'جنط رياضي', en:'Wheel'},
  {img:'part-suspension.webp', ar:'مساعد تعليق', en:'Suspension'},
  {img:'part-headlight.webp', ar:'مصباح LED', en:'Headlight'}
];
const GALLERY = ['gallery-1.webp','gallery-2.webp','gallery-3.webp','gallery-4.webp'];
const PROPS = [
  {i:'diamond', t:'prop1t', d:'prop1d'},
  {i:'shield', t:'prop2t', d:'prop2d'},
  {i:'clock', t:'prop3t', d:'prop3d'},
  {i:'headset', t:'prop4t', d:'prop4d'},
  {i:'map', t:'prop5t', d:'prop5d'}
];
const PROP_ICONS = {
  diamond:'<path d="M12 2l4 5-4 15L8 7l4-5zm0 0l4 5H8l4-5zM3 9l5-2 4 5-6 7-3-10zm18 0l-5-2-4 5 6 7 3-10z" stroke="#B6FF00" stroke-width="1.6" fill="none" stroke-linejoin="round"/>',
  shield:'<path d="M12 2l8 3.5v5.2c0 5-3.4 9.6-8 11.3-4.6-1.7-8-6.3-8-11.3V5.5L12 2zm0 15.5l4.5-4.5-1.4-1.4-3.1 3.1-1.6-1.6-1.4 1.4 3 3z" stroke="#B6FF00" stroke-width="1.6" fill="none" stroke-linejoin="round"/>',
  clock:'<circle cx="12" cy="12" r="9" stroke="#B6FF00" stroke-width="1.7" fill="none"/><path d="M12 7v5l3.5 2" stroke="#B6FF00" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  headset:'<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-3zm16 0a2 2 0 0 0-2-2h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-3z" stroke="#B6FF00" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  map:'<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" stroke="#B6FF00" stroke-width="1.7" fill="none" stroke-linejoin="round"/>'
};

/* ── State ── */
let lang = localStorage.getItem('carva-lang') || 'ar';
let activeService = 'wash';
const formData = {};

/* Centralized WhatsApp (business rule: single channel, never hardcode) */
const CARVA_WHATSAPP = '97333789641';
const WA_LINK = `https://wa.me/${CARVA_WHATSAPP}`;

/* ── Helpers ── */
const $ = s => document.querySelector(s);
const t = k => I18N[lang][k] || k;
function iconSVG(d){return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="${d}" stroke="#B6FF00" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;}
function checkSVG(){return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#B6FF00" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';}

/* ── Renderers ── */
function renderServices(){
  $('#servicesGrid').innerHTML = SERVICES.map(s => `
    <article class="svc">
      <div class="svc-img"><img src="assets/img/${s.img}" alt="${s.name[lang]}" loading="lazy"></div>
      <div class="svc-body">
        <div class="ico">${iconSVG(s.icon)}</div>
        <h3>${s.name[lang]}</h3>
        <p>${s.desc[lang]}</p>
        <span class="est">${t('svc.est')}</span>
        <a class="link" href="#request" data-svc="${s.id}">${t('svc.link')} <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="${lang==='ar'?'M19 12H5M12 19l-7-7 7-7':'M5 12h14M12 5l7 7-7 7'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </article>`).join('');
  document.querySelectorAll('.svc .link').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); selectService(a.dataset.svc); location.hash = '#request';
  }));
}

function renderParts(){
  $('#partsGrid').innerHTML = PARTS.map((p,i) => `
    <div class="part">
      <img src="assets/img/${p.img}" alt="${p[lang]}" loading="lazy">
      <div class="pn">${p.ar}</div><div class="pe">${p.en}</div>
    </div>`).join('');
}

function renderGallery(){
  $('#galleryGrid').innerHTML = GALLERY.map((g,i) => `
    <div class="g-item"><img src="assets/img/${g}" alt="CARVA gallery ${i+1}" loading="lazy"></div>`).join('');
}

function renderProps(){
  $('#propsGrid').innerHTML = PROPS.map(p => `
    <div class="prop">
      <div class="pi"><svg width="26" height="26" viewBox="0 0 24 24">${PROP_ICONS[p.i]}</svg></div>
      <div class="pt">${t(p.t)}</div><div class="pd">${t(p.d)}</div>
    </div>`).join('');
}

function renderHow(){
  $('#howGrid').innerHTML = HOW.map(s => `
    <div class="step"><div class="num">${s.n}</div><h4>${s.t[lang]}</h4><p>${s.d[lang]}</p></div>`).join('');
}

function renderPolicies(){
  $('#policiesGrid').innerHTML = POLICIES.map(p => `
    <div class="policy">
      <h3>${p.name[lang]}</h3>
      <div class="en-sub">${p.id==='privacy'?'PRIVACY':'WARRANTY & RETURN'}</div>
      <ul>${p.items[lang].map(i => `<li>${checkSVG()}<span>${i}</span></li>`).join('')}</ul>
    </div>`).join('');
}

/* ── Service tabs ── */
function renderTabs(){
  $('#svcTabs').innerHTML = SERVICES.map(s =>
    `<button class="svc-tab${s.id===activeService?' active':''}" data-tab="${s.id}">${s.name[lang]}</button>`).join('');
  document.querySelectorAll('.svc-tab').forEach(b => b.addEventListener('click', () => selectService(b.dataset.tab)));
}

function selectService(id){
  activeService = id;
  renderTabs(); renderForm(); updatePreview();
  $('#formTitle').textContent = SERVICES.find(s => s.id===id).name[lang];
  $('#request').scrollIntoView({behavior:'smooth'});
}

/* ── Form ── */
const BASE_FIELDS = ['name','phone','make','model','year','color','area','date','time','notes'];

function fieldHTML(k, label, type, extra){
  const val = formData[k] || '';
  const req = extra && extra.req;
  const reqMark = req ? `<span class="req">*</span>` : '';
  if(type==='select'){
    const opts = extra.opts.map(o => `<option value="${o}" ${val===o?'selected':''}>${t(o)}</option>`).join('');
    return `<div class="field"><label>${t(label)} ${reqMark}</label><select data-k="${k}">${opts}</select></div>`;
  }
  if(type==='file'){
    return `<div class="field full"><label>${t(label)}</label>
      <label class="file-drop" data-k="${k}">${val? '📎 '+val : t('f.photo')}<input type="file" data-k="${k}" hidden accept="image/*"></label></div>`;
  }
  if(type==='textarea'){
    return `<div class="field full"><label>${t(label)}</label><textarea data-k="${k}" rows="3">${val}</textarea></div>`;
  }
  const hint = k==='year' ? `<div class="hint">${t('f.hintYear')}</div>` : '';
  return `<div class="field"><label>${t(label)} ${reqMark}</label><input type="${k==='phone'?'tel':k==='date'?'date':k==='time'?'time':'text'}" data-k="${k}" value="${val}" ${k==='phone'?'maxlength="8"':''}>${hint}</div>`;
}

function renderForm(){
  const svc = SERVICES.find(s => s.id===activeService);
  const baseMap = {name:'f.name',phone:'f.phone',make:'f.make',model:'f.model',year:'f.year',color:'f.color',area:'f.area',date:'f.date',time:'f.time',notes:'f.notes'};
  let html = BASE_FIELDS.map(k => fieldHTML(k, baseMap[k], k==='notes'?'textarea':'text')).join('');
  // service-specific extras
  svc.extra.forEach(x => { html += fieldHTML(x.k, x.t, x.type, x); });
  $('#formGrid').innerHTML = html;
  // events
  $('#formGrid').querySelectorAll('input[data-k], select[data-k], textarea[data-k]').forEach(el => {
    el.addEventListener('input', e => { formData[e.target.dataset.k] = e.target.value; updatePreview(); });
  });
  $('#formGrid').querySelectorAll('input[type=file]').forEach(el => {
    el.addEventListener('change', e => { formData[e.target.dataset.k] = e.target.files[0] ? e.target.files[0].name : ''; updatePreview(); });
  });
}

/* ── WhatsApp message builder (Base44 templates) ── */
function buildMessage(){
  const svc = SERVICES.find(s => s.id===activeService);
  const isAr = lang==='ar';
  const L = [];
  if(isAr){
    L.push('مرحباً فريق كارفا 👋');
    L.push(`أرغب بطلب خدمة: ${svc.name.ar}`);
    L.push(`🚗 السيارة: ${formData.make||'—'} ${formData.model||''} ${formData.year||''} (${formData.color||'—'})`);
    L.push(`📍 الموقع: ${formData.area||'—'}`);
    L.push(`🗓️ الوقت المفضل: ${formData.date||'—'} ${formData.time||''}`);
    if(formData.phone) L.push(`📱 الهاتف: ${formData.phone}`);
    // service-specific
    if(activeService==='wash' && formData.level) L.push(`🧼 المستوى: ${t(formData.level)}`);
    if(activeService==='part'){
      if(formData.part) L.push(`🔩 القطعة: ${formData.part}${formData.partno?` (رقم: ${formData.partno})`:''}`);
    }
    if(activeService==='import'){
      if(formData.origin) L.push(`🌍 بلد المنشأ: ${formData.origin}`);
      if(formData.budget) L.push(`💰 الميزانية التقريبية: ${t(formData.budget)}`);
      if(formData.ref) L.push(`🔗 مرجع: ${formData.ref}`);
    }
    if(activeService==='rescue' && formData.tech) L.push(`🛠️ تفضيل الفني: ${t(formData.tech)}`);
    if(activeService==='insurance'){
      if(formData.insType) L.push(`🛡️ نوع التأمين: ${t(formData.insType)}`);
      if(formData.insPref) L.push(`🏢 تفضيل الشركة: ${t(formData.insPref)}`);
    }
    if(activeService==='tyres'){
      if(formData.tyreSize) L.push(`⚙️ مقاس الإطارات: ${formData.tyreSize}`);
      if(formData.tyreBrand) L.push(`🏷️ الماركة/الفئة: ${t(formData.tyreBrand)}`);
      if(formData.tyrePlace) L.push(`📍 مكان التبديل: ${t(formData.tyrePlace)}`);
    }
    if(formData.photo) L.push(t('msg.photo'));
    L.push(`📝 ملاحظات: ${formData.notes||'—'}`);
    L.push('أرجو التواصل معي لتأكيد السعر التقديري. شكراً لكم!');
  } else {
    L.push('Hello CARVA Team 👋');
    L.push(`I'd like to request: ${svc.name.en}`);
    L.push(`🚗 Vehicle: ${formData.make||'—'} ${formData.model||''} ${formData.year||''} (${formData.color||'—'})`);
    L.push(`📍 Location: ${formData.area||'—'}`);
    L.push(`🗓️ Preferred time: ${formData.date||'—'} ${formData.time||''}`);
    if(formData.phone) L.push(`📱 Phone: ${formData.phone}`);
    if(activeService==='wash' && formData.level) L.push(`🧼 Level: ${t(formData.level)}`);
    if(activeService==='part'){
      if(formData.part) L.push(`🔩 Part: ${formData.part}${formData.partno?` (#${formData.partno})`:''}`);
    }
    if(activeService==='import'){
      if(formData.origin) L.push(`🌍 Origin: ${formData.origin}`);
      if(formData.budget) L.push(`💰 Budget: ${t(formData.budget)}`);
      if(formData.ref) L.push(`🔗 Reference: ${formData.ref}`);
    }
    if(activeService==='rescue' && formData.tech) L.push(`🛠️ Technician: ${t(formData.tech)}`);
    if(activeService==='insurance'){
      if(formData.insType) L.push(`🛡️ Coverage: ${t(formData.insType)}`);
      if(formData.insPref) L.push(`🏢 Insurer preference: ${t(formData.insPref)}`);
    }
    if(activeService==='tyres'){
      if(formData.tyreSize) L.push(`⚙️ Tyre size: ${formData.tyreSize}`);
      if(formData.tyreBrand) L.push(`🏷️ Brand/tier: ${t(formData.tyreBrand)}`);
      if(formData.tyrePlace) L.push(`📍 Fitting location: ${t(formData.tyrePlace)}`);
    }
    if(formData.photo) L.push(t('msg.photo'));
    L.push(`📝 Notes: ${formData.notes||'—'}`);
    L.push('Please contact me to confirm the estimate. Thank you!');
  }
  return L.join('\n');
}

function updatePreview(){
  $('#previewMsg').textContent = buildMessage();
}

/* ── Actions ── */
function openWhatsApp(){
  const phone = (formData.phone||'').replace(/\D/g,'');
  if(phone.length!==8){ alert(t('err.phone')); return; }
  const msg = buildMessage();
  const url = `${WA_LINK}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
}

function copyMessage(){
  navigator.clipboard.writeText(buildMessage()).then(() => {
    const b = $('#copyBtn'); const orig = b.innerHTML;
    b.innerHTML = t('copy.done');
    setTimeout(()=>{ b.innerHTML = orig; }, 1800);
  }).catch(() => { /* fallback for non-secure contexts */ });
}

/* ── Language toggle ── */
function applyStatic(){
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $('#langLabel').textContent = lang==='ar' ? 'English' : 'عربي';
  $('#year').textContent = new Date().getFullYear();
}

function setLang(l){
  lang = l;
  localStorage.setItem('carva-lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l==='ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('en', l==='en');
  applyStatic(); renderServices(); renderHow(); renderTabs(); renderPolicies(); renderForm(); renderParts(); renderGallery(); renderProps(); updatePreview();
  $('#formTitle').textContent = SERVICES.find(s => s.id===activeService).name[lang];
  document.title = l==='ar' ? 'CARVA — كل ما تحتاجه سيارتك | Automotive Super Platform'
                            : 'CARVA — Everything Your Car Needs | Automotive Super Platform';
}

/* ── Init ── */
let heroIdx = 0, heroTimer = null;
function startHero(){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slide-dots button');
  if(slides.length < 2) return;
  heroTimer = setInterval(() => {
    heroIdx = (heroIdx + 1) % slides.length;
    slides.forEach((s,i) => s.classList.toggle('active', i===heroIdx));
    dots.forEach((d,i) => d.classList.toggle('active', i===heroIdx));
  }, 6000);
  dots.forEach((d,i) => d.addEventListener('click', () => {
    heroIdx = i;
    slides.forEach((s,j) => s.classList.toggle('active', j===i));
    dots.forEach((x,j) => x.classList.toggle('active', j===i));
    clearInterval(heroTimer); startHero();
  }));
}

function initReveals(){
  const obs = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  // Safety net: reveal everything shortly after load (fast scroll / screenshots / no-IO)
  setTimeout(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')), 2200);
}

function init(){
  $('#langToggle').addEventListener('click', () => setLang(lang==='ar'?'en':'ar'));
  $('#waBtn').addEventListener('click', openWhatsApp);
  $('#copyBtn').addEventListener('click', copyMessage);
  $('#menuBtn').addEventListener('click', () => $('#drawer').classList.add('open'));
  $('#closeDrawer').addEventListener('click', () => $('#drawer').classList.remove('open'));
  $('#drawer').addEventListener('click', e => { if(e.target.tagName==='A') $('#drawer').classList.remove('open'); });
  setLang(lang);      // renders services/parts/gallery/props FIRST
  startHero();
  initReveals();      // THEN observe everything (incl. freshly rendered)
}
document.addEventListener('DOMContentLoaded', init);
