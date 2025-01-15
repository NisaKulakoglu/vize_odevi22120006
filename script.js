const form = document.getElementById("userform");
     // Burç yorumlarınız //
    function getHoroscope(sign) {
        const horoscopes = {
            "KOÇ": "Bugün enerjik ve cesur hissedeceksiniz, yeni başlangıçlar yapabilirsiniz.",
            "BOĞA": "Sabırlı ve kararlı olun, önemli bir fırsat kapınızı çalabilir.",
            "İKİZLER": "Sosyal hayatınızda yeni insanlarla tanışabilir ve ilginç fikirler edinebilirsiniz.",
            "YENGEÇ": "Aile ilişkilerinizde daha fazla vakit geçirebilirsiniz. Duygusal açıdan huzurlusunuz.",
            "ASLAN": "Bugün liderlik özellikleriniz ön planda olacak. Başkalarına ilham verebilirsiniz.",
            "BAŞAK": "Detaylara dikkat etmeniz gereken bir gün. İş ve sorumluluklar ön plana çıkabilir.",
            "TERAZİ": "Deneyimlerinizi paylaşarak insanlarla daha güçlü bağlar kurabilirsiniz.",
            "AKREP": "Duygusal açıdan yoğun bir gün, içsel gücünüzü keşfetmek için harika bir zaman.",
            "YAY": "Yeni yerler keşfetmek için harika bir gün. Seyahat planları yapabilirsiniz.",
            "OĞLAK": "Kariyerinizle ilgili önemli adımlar atabilir ve uzun vadeli planlar yapabilirsiniz.",
            "KOVA": "Farklı düşünceler ve yenilikçi fikirler ön plana çıkacak, özgür ruhunuzu hissedin.",
            "BALIK": "Duygusal dengeyi sağlamak için daha fazla içsel huzur arayışında olabilirsiniz."
        };
            return horoscopes[sign] || "Bugün sizin için sıradışı bir gün!";
        }
    
    // Hangi Burçsunuz? //
     function getZodiacSign(date) {
        const month = date.getMonth() + 1; // Ay 0-11 arası, bu yüzden 1 ekliyoruz
        const day = date.getDate();
    
        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "KOÇ";
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "BOĞA";
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "İKİZLER";
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "YENGEÇ";
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "ASLAN";
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "BAŞAK";
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "TERAZİ";
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "AKREP";
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "YAY";
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "OĞLAK";
        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "KOVA";
        if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "BALIK";
    
            return "Unknown";
        }
    
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
    
            const firstName = document.getElementById("fname").value.trim();
            const lastName = document.getElementById("lname").value.trim();
            const dob = document.getElementById("dob").value;
    
            if (!firstName || !lastName || !dob) {
                alert("Lütfen tüm alanları eksiksiz doldurun!");
                return;
            }
    
            // Doğum tarihi kontrolü ve burç hesaplaması
            const birthDate = new Date(dob);
            const zodiacSign = getZodiacSign(birthDate);
    
            // Burç yorumu
            const horoscope = getHoroscope(zodiacSign);
    
            // Kullanıcıyı bilgilendiren mesaj
            alert(`Merhaba ${firstName} ${lastName}, ${zodiacSign} burcunun günlük yorumu: ${horoscope}`);
        });