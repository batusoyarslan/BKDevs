$(document).ready(function() {
    var arrLang = {
        'tr': {
            '1': 'Ana Sayfa',
            '2': 'Hakkımızda',
            '3': 'Projeler',
            '4': 'Hizmetler',
            '5': 'Ekip',
            '6': 'Bize Ulasın',
            '7': 'Ön yüz ve arka yüz gelistirme, duyarlı tasarım ve kullanıcı deneyimi optimizasyonu konularında uzman, tutkulu web gelistiricileri olarak, kullanıcı etkilesimini ve yeniliği artıran, sorunsuz ve dinamik web uygulamaları olusturmanın zorluklarından keyif alıyoruz.',
            
            //About us
            '8': 'Hakkımızda',
            '9': 'Bizi Tanıyın',
            '10': ' Biz, müsterilerimizin çevrimiçi varlıklarını olusturup gelistirmelerine yardımcı olmaya adanmıs bir web gelistirme sirketiyiz. Ekibimiz, özel, görsel olarak çekici ve kullanıcı dostu web siteleri olusturmada uzmanlasmıstır. Web sitesi tasarımı, gelistirme ve bakım hizmetleri sunarak her sitenin duyarlı ve SEO uyumlu olmasını sağlıyoruz. Müsterilerimizin hedeflerini anlamak ve sonuç odaklı çözümler sunmak için yakından çalısıyoruz. Küçük isletmelerden büyük kuruluslara kadar, çevrimiçi basarı için gerekli araçları ve desteği sağlıyoruz. Güçlü bir dijital varlık ve is büyümesi elde etmek için güvenilir ortağınız olmaya hazırız.',
            '11': 'Öz Geçmisimiz',
            
            //Services
            '12': 'Hizmetlerimiz',
            '13': 'Duyarlı Web Tasarımı',
            '14': 'Web siteleri, daha iyi bir kullanıcı deneyimi için otomatik olarak herhangi bir cihaz veya ekran boyutuna uyacak sekilde ayarlanır.',
            '15': 'Web Sitesi Bakım ve Destek',
            '16': 'Bir web sitesinin sorunsuz ve güvenli bir sekilde çalısmasını sağlamak için düzenli güncellemeler, düzeltmeler ve yardım.',
            '17': 'SPA Gelistirme',
            '18': 'Sayfayı yeniden yüklemeden içeriği dinamik olarak yükleyen Tek Sayfa Uygulamaları olusturma.',
            '19': 'Ön Yüz Hata Ayıklama',
            '20': 'Bir web sitesinin tasarımında ve kullanıcı arayüzünde sorunları bulma ve düzeltme.',
            '21': 'JavaScript Gelistirme',
            '22': 'JavaScript programlama dili kullanarak web siteleri için etkilesimli özellikler ve islevler olusturma.',
            '23': 'UI/UX Tasarımı',
            '24': 'Web siteleri veya uygulamalar için kullanıcı arayüzlerini ve deneyimlerini sezgisel ve keyifli olacak sekilde tasarlama.',

            //Projects
            '33': 'Projeler',
            '25': 'Bazı Çalısmalarımız',
            '26': 'Yönetim danısmanlığı için dinamik web tasarımı',
            '27': 'Teknoloji sirketi için yenilikçi web platformu',
            '28': 'Temiz ve islevsel kahve dükkanı web düzeni',
            '29': 'Telegram için gelismis kripto ticaret botu',
            '30': 'Özel piksel sanatı NFTlerinin zarif koleksiyonu',
            '31': 'YAKINDA',
            '32': 'Su anda yapım asamasında olan projemiz yakında yayında olacak...',


            //Takım
            '34': 'Ekibimiz',
            '35': 'Yazılım Gelistiricisi',


             //Contact Us
             '36': 'İletisim Formu',
             '37': 'Beraber Çalısalım',
             '38': 'İsminiz',
             '39': 'Soyisminiz',
             '40': 'E-Posta Adresiniz',
             '41': 'Mesajınız',
             '42': 'Gönder',

             //Footer
             '43': 'İletisim',
             '44': 'Sayfalar',
             '45': 'Sosyal Medya',


        },
        'en': {
            '1': 'Home',
            '2': 'About',
            '3': 'Projects',
            '4': 'Services',
            '5': 'Team',
            '6': 'Contact Us',
            '7': 'As passionate web developers with expertise in front-end and back-end development, responsive design, and user experience optimization, we thrive on the challenges of creating seamless and dynamic web applications that drive user engagement and innovation.',
            
            //About us
            '8': 'About Us',
            '9': 'Get to Know Us',
            '10': ' We are a web development company dedicated to helping clients establish and enhance their online presence. Our team specializes in creating custom, visually appealing, and user-friendly websites. We offer services in website design, development, and maintenance, ensuring each site is responsive and SEO-optimized. We work closely with clients to understand their goals and deliver tailored solutions that drive results. From small businesses to large enterprises, we provide the tools and support necessary for online success. Trust us to be your partner in achieving a strong digital presence and business growth.',
            '11': 'Download Resume',
            
            //Services
            '12': 'Our Services',
            '13': 'Responsive Web Design',
            '14': 'Websites automatically adjust to look good on any device or screen size for a better user experience.',
            '15': 'Website Maintenance and Support',
            '16': 'Regular updates, fixes, and help to keep a website running smoothly and securely.',
            '17': 'SPA Development',
            '18': 'Building Single Page Applications that load content dynamically without reloading the page.',
            '19': 'Front-end Debugging',
            '20': 'Finding and fixing issues in a website’s design and user interface.',
            '21': 'JavaScript Development',
            '22': 'Creating interactive features and functionality for websites using JavaScript programming language.',
            '23': 'UI/UX Design',
            '24': 'Designing user interfaces and experiences for websites or apps to be intuitive and enjoyable.',

            //Pojects
            '33': 'Projects',
            '25': 'Some of our Work',
            '26': 'Dynamic web design for management consulting',
            '27': 'Innovative web platform for tech company',
            '28': 'Clean and functional coffee shop web layout.',
            '29': 'Advanced crypto trading bot for Telegram',
            '30': 'Exquisite collection of exclusive pixel art NFTs',
            '31': 'COMING SOON',
            '32': 'Our project, which is currently under construction, will be available soon...',
       
       
            //Team
            '34': 'Our Team',
            '35': 'Software Developer',
       
            //Contact Us
            '36': 'Contact Form',
            '37': 'Lets work together',
            '38': 'Name',
            '39': 'Last Name',
            '40': 'Email Adress',
            '41': 'Your Message',
            '42': 'Send',

            //Footer
            '43': 'Contact Us',
            '44': 'Pages',
            '45': 'Social Media',
            

        },
    };

    



    // Dil butonlarına tıklama olaylarını ekleyin
    $('#btn-tr').click(function() {
        setLanguage('tr');
    });

    $('#btn-en').click(function() {
        setLanguage('en');
    });

    // LocalStorage'dan dili al ve uygula
    var lang = JSON.parse(localStorage.getItem('dil')) || 'en'; // Varsayılan dil: İngilizce
    setLanguage(lang);

    function setLanguage(lang) {
        localStorage.setItem('dil', JSON.stringify(lang));
        $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    }
});
