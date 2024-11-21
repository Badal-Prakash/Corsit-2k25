"use client";
import React, { createContext, useState } from "react";
// Fourth Year Images
import UJJAWAL_SINGH from "@/public/image/img/Fourth_year/Ujjawal_4yr.jpg";
import SHARANYA_BHAT from "@/public/image/img/Fourth_year/SharanyaBhat.jpg";
import ASHUTOSH_MALVIYA from "@/public/image/img/Fourth_year/Ashutosh Malviya.jpg";
import KUMAR_HARSH from "@/public/image/img/Fourth_year/KumarHarsh.jpg";
import RISHAV_SHEKHAR from "@/public/image/img/Fourth_year/rishav.jpg";
import HARSH_GAURAV from "@/public/image/img/Fourth_year/Harsh Gaurav.jpg";
import LEKHANA_PATEL from "@/public/image/img/Fourth_year/IMG_20230216_144211.jpg";
import NAMRATA_BHARADWAJ from "@/public/image/img/Fourth_year/namrata.jpg";
import SIDDHANT_RAJ from "@/public/image/img/Fourth_year/Siddhant Raj.jpeg";
import JATIN_SHARMA from "@/public/image/img/Fourth_year/Jatin.jpg";
import SURAJ_ARIBENCHI from "@/public/image/img/Fourth_year/_Suraj Aribenchi.jpeg";
import VIVEK_M from "@/public/image/img/Fourth_year/Vivek M (EEE).jpg";
import AADARSH_SHRINIWAS from "@/public/image/img/Fourth_year/Aadarsh Shriniwas.jpg";
import VAISHALI_CHOUDHARY from "@/public/image/img/Fourth_year/B Vaishali Choudhary .jpg";
import ADITI_JOSHI from "@/public/image/img/Fourth_year/Aditi Joshi ECE.jpg";
import MAYANK_PANDEY from "@/public/image/img/Fourth_year/Mayank Pandey .jpg";
import BADAL from "@/public/image/img/Fourth_year/badal.jpeg";
import ARYAN from "@/public/image/img/Fourth_year/Aryan.jpg";

// Third Year Images
import CHAITHRA_HR from "@/public/image/img/Third_year/_Chaithra HR , AIML.jpg";
import KETAKI_JOJANE from "@/public/image/img/Third_year/_Ketaki.jpg";
import OM from "@/public/image/img/Third_year/_Om .jpg";
import MUDIT_SHEKHAR from "@/public/image/img/Third_year/Mudit shekhar , EEE.jpg";
import AISHWARYA_ACHARYA from "@/public/image/img/Third_year/Aishwarya Acharya.jpeg";
import NEETHU from "@/public/image/img/Third_year/Neethu.jpg";
import LIKHITHA_SAI from "@/public/image/img/Third_year/NM Sai Likhitha.jpg";
import YATIN_BHATIA from "@/public/image/img/Third_year/YATIN BHATIA.jpg";
import VARSHA from "@/public/image/img/Third_year/varsha.jpg";
import GURU_SRISHA from "@/public/image/img/Third_year/Guru Srisha.jpg";
import ANANYA from "@/public/image/img/Third_year/Ananya.jpg";
import PAVAN from "@/public/image/img/Third_year/Pavan.jpeg";
import ADITYA_AGARWAL from "@/public/image/img/Third_year/aditya agarwal.jpg";
import PURBAYAN_BISWAS from "@/public/image/img/Third_year/_PURBAYAN BISWAS.jpg";
import VRITIKA_SAVUKAR from "@/public/image/img/Third_year/VRITIKA VITHAL SAVUKAR.jpg";

// Second Year Images
import JAHNVI_SHARMA from "@/public/image/img/Second_year/_Jahnvi.jpeg";
import ADVAITA_AMRIT from "@/public/image/img/Second_year/Advaita Amrit.jpeg";
import PRATIK_GAUTAM from "@/public/image/img/Second_year/_Pratik Gautam.jpeg";
import ANAYA_SINGH from "@/public/image/img/Second_year/Anaya Singh.jpeg";
import TARUN_MURAGODNAVAR from "@/public/image/img/Second_year/_Tarun Muragodnavar.jpg";
import ARYAN_SINHA from "@/public/image/img/Second_year/Aryan kumar Sinha.jpeg";
import SHASHANK_H from "@/public/image/img/Second_year/Shashank H.jpeg";
import JISHNU_KHARGHARIA from "@/public/image/img/Second_year/jishnu.jpg";
import KRITIKA from "@/public/image/img/Second_year/Kritika.jpeg";
import ADITYA_LOCHAN from "@/public/image/img/Second_year/Aditya lochan.jpeg";
import DHRUVA_D from "@/public/image/img/Second_year/Dhruva D.jpeg";
import SHRAVYA from "@/public/image/img/Second_year/Shravya.jpg";
import RISHABH_SINGH from "@/public/image/img/Second_year/_RISHABH SINGH.jpg";
import YASH_JADHAV from "@/public/image/img/Second_year/Yash Jadhav.jpg";

// Links
import INSTAGRAM_ICON from "@/public/image/img/link/link.png";
const TeamContext = createContext();

// Create a provider component
const TeamProvider = ({ children }) => {
  const [people, setPeople] = useState([
    // Fourth Year Members
    {
      name: "Jatin Sharma",
      linkedin: "https://www.linkedin.com/in/jatin-sharma-669590142",
      image: JATIN_SHARMA,
      role: "Chairman",
      year: "Fourth Year",
    },
    {
      name: "Ujjawal Singh",
      linkedin: "https://www.linkedin.com/in/ujjawal-singh-4a4817229",
      image: UJJAWAL_SINGH,
      role: "Vice-Chairman",
      year: "Fourth Year",
    },
    {
      name: "Kumar Harsh",
      linkedin: "https://www.linkedin.com/in/kumar-harsh-39bb2b249",
      image: KUMAR_HARSH,
      role: "Treasurer",
      year: "Fourth Year",
    },
    {
      name: "Namrata Bharadwaj",
      linkedin: "https://www.linkedin.com/in/namratabharadwaj/",
      image: NAMRATA_BHARADWAJ,
      role: "Treasurer",
      year: "Fourth Year",
    },
    {
      name: "Sharanya Bhat",
      linkedin: "https://www.linkedin.com/in/sharanya-bhat-b2070a239",
      image: SHARANYA_BHAT,
      role: "Web Dev Lead",
      year: "Fourth Year",
    },
    {
      name: "Aadarsh Shriniwas",
      linkedin: "https://www.linkedin.com/in/aadarsh-shriniwas-512047227",
      image: AADARSH_SHRINIWAS,
      role: "Android Dev Lead",
      year: "Fourth Year",
    },
    {
      name: "Siddhant Raj",
      linkedin: "https://www.linkedin.com/in/siddhant-raj-3a804a2a9/",
      image: SIDDHANT_RAJ,
      role: "Tech Lead",
      year: "Fourth Year",
    },
    {
      name: "Aditi Joshi",
      linkedin: "https://www.linkedin.com/in/aditi-joshi-5a260b229",
      image: ADITI_JOSHI,
      role: "Photoshop Lead",
      year: "Fourth Year",
    },
    {
      name: "Lekhana Patel",
      linkedin: "https://www.linkedin.com/in/lekhana-patel-3b8986225",
      image: LEKHANA_PATEL,
      role: "Digital Lead",
      year: "Fourth Year",
    },
    {
      name: "Ashutosh Malviya",
      linkedin: "https://www.linkedin.com/in/ashumalviya",
      image: ASHUTOSH_MALVIYA,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Rishav Shekhar",
      linkedin: "https://www.linkedin.com/in/rishav-shekhar-a21279232",
      image: RISHAV_SHEKHAR,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Harsh Gaurav",
      linkedin: "https://www.linkedin.com/in/harsh-gaurav-3277a4223",
      image: HARSH_GAURAV,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Vivek M",
      linkedin: "https://www.linkedin.com/in/vivek-m-b5025a226",
      image: VIVEK_M,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Aryan",
      linkedin: "https://www.linkedin.com/in/aryan-gupta-722a7a256/",
      image: ARYAN,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Mayank Pandey",
      linkedin: "https://www.linkedin.com/in/mayank-pandey-a8b362229",
      image: MAYANK_PANDEY,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Vaishali Choudhary",
      linkedin: "https://www.linkedin.com/in/vaishali-choudhary/",
      image: VAISHALI_CHOUDHARY,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Badal",
      linkedin: "https://www.linkedin.com/in/badal-kumar-5b7b7a232",
      image: BADAL,
      role: "Member",
      year: "Fourth Year",
    },
    {
      name: "Suraj Aribenchi",
      linkedin: "https://www.linkedin.com/in/suraj-aribenchi/",
      image: SURAJ_ARIBENCHI,
      role: "Member",
      year: "Fourth Year",
    },
    // Third Year Members
    {
      name: "Chaithra H R",
      linkedin: "https://www.linkedin.com/in/chaithra-hr/",
      image: CHAITHRA_HR,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Ketaki Jojane",
      linkedin: "https://www.linkedin.com/in/ketaki-jojane/",
      image: KETAKI_JOJANE,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Om Chaturvedi",
      linkedin: "https://www.linkedin.com/company/corsit/",
      image: OM,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Mudit Shekhar",
      linkedin: "https://www.linkedin.com/in/mudit-shekhar-339465331/",
      image: MUDIT_SHEKHAR,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Purbayan Biswas",
      linkedin: "https://www.linkedin.com/in/purbayan-biswas-4a5025244/",
      image: PURBAYAN_BISWAS,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Vritika Vithal Savukar",
      linkedin: "https://www.linkedin.com/in/vritika-vithal-savukar/",
      image: VRITIKA_SAVUKAR,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Ananya",
      linkedin: "https://www.linkedin.com/in/ananya-agarwal/",
      image: ANANYA,
      role: "Member",
      year: "Third Year",
    },
    {
      name: "Jahnvi Sharma",
      linkedin: "https://www.linkedin.com/in/jahnvi-sharma-41b877243/",
      image: JAHNVI_SHARMA,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Advaita Amrit",
      linkedin: "https://www.linkedin.com/in/advaita-amrit/",
      image: ADVAITA_AMRIT,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Pratik Gautam",
      linkedin: "https://www.linkedin.com/in/pratik-gautam-412b9029a/",
      image: PRATIK_GAUTAM,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Anaya Singh",
      linkedin: "https://www.linkedin.com/in/anaya-singh-386140302/",
      image: ANAYA_SINGH,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Shashank H",
      linkedin: "https://www.linkedin.com/in/shashank-h-27997b202/",
      image: SHASHANK_H,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Jishnu Khargharia",
      linkedin: "http://www.linkedin.com/in/jishnukhargharia",
      image: JISHNU_KHARGHARIA,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Kritika Sharma",
      linkedin: "https://www.linkedin.com/in/kritika-438581266",
      image: KRITIKA,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Aditya Lochan",
      linkedin: "https://www.linkedin.com/in/aditya-lochan-a119a71a2/",
      image: ADITYA_LOCHAN,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Rishabh Singh",
      linkedin: "https://www.linkedin.com/in/rishabh-s-542b02271/",
      image: RISHABH_SINGH,
      role: "Member",
      year: "Second Year",
    },
    {
      name: "Yash Jadhav",
      linkedin: "https://www.linkedin.com/in/yash-jadhav-7ba599264/",
      image: YASH_JADHAV,
      role: "Member",
      year: "Second Year",
    },
  ]);
  const [filteredPeople, setFilteredPeople] = useState(people);
  const filterPeople = (role = "", year = "") => {
    let filtered;

    if (role === "Lead") {
      filtered = people.filter((person) => person.role !== "Member"); // Show all leads across all years
    } else {
      filtered = people; // Start with all people
      if (role) {
        filtered = filtered.filter((person) => person.role === role); // Filter by specific role
      }
      if (year) {
        filtered = filtered.filter((person) => person.year === year); // Filter by specific year
      }
    }

    setFilteredPeople(filtered);
  };

  return (
    <TeamContext.Provider value={{ people, filteredPeople, filterPeople }}>
      {children}
    </TeamContext.Provider>
  );
};

export { TeamContext, TeamProvider };
