import Navbar from "@/components/Navbar"
import GridItem from "@/components/GridItem"
import style from "@/app/explore/safety/askforhelp/askforhelp.module.css"
import fakecall from "@/assets/askforhelp/fakecall.jpg"
import voicegesture from "@/assets/askforhelp/voicegesture.webp"
import disaster from "@/assets/askforhelp/Disaster & Crisis Mode.jpg"
import saferoute from "@/assets/askforhelp/saferoutemapping.jpg"
import livelocation from "@/assets/askforhelp/livelocationsharing.jpg"
import panicmode from "@/assets/askforhelp/Panic Mode Alarm.jpg"
import stalker from "@/assets/askforhelp/stalker detection AI.jpg"
import sefdefense from "@/assets/askforhelp/Self-Defense Training.jpg"
import emergencycontacts from "@/assets/askforhelp/emergency contacts.jpg"
import emergencyroadside from "@/assets/askforhelp/emergency roadside assistance.jpg"
import domesticviolence from "@/assets/askforhelp/domestic violence.jpg"
import workplaceguard from "@/assets/askforhelp/workplace security and safety.jpg"
import calmdown from "@/assets/askforhelp/calm-down exercise feature.jpg"
import communitysupport from "@/assets/askforhelp/community support.webp"
import cyberabuse from "@/assets/askforhelp/cyber abuse protection.jpeg"
import aipowered from "@/assets/askforhelp/AI-powered medical assistant.jpeg"

const AskForHelp = () => {
  const gridData = [
    { imageSrc: fakecall.src, title: "Fake Call" },
    {
      imageSrc: voicegesture.src,
      title: "Enable Voice & gesture SOS Activation",
    },
    { imageSrc: disaster.src, title: "Disaster & Crisis Mode" },
    { imageSrc: saferoute.src, title: "Safe Route Mapping" },
    { imageSrc: livelocation.src, title: "Live Location Sharing" },
    { imageSrc: panicmode.src, title: "Panic Mode Alarm" },
    { imageSrc: stalker.src, title: "Stalker Detection AI" },
    { imageSrc: sefdefense.src, title: "Self-Defense Training" },
    { imageSrc: emergencycontacts.src, title: "Emergency Contacts" },
    { imageSrc: emergencyroadside.src, title: "Emergency Roadside Assistance" },
    { imageSrc: domesticviolence.src, title: "Domestic Violence" },
    { imageSrc: workplaceguard.src, title: "Workplace Security and Safety" },
    { imageSrc: calmdown.src, title: "Calm-Down Exercise Feature" },
    { imageSrc: communitysupport.src, title: "Community Support" },
    { imageSrc: cyberabuse.src, title: "Cyber Abuse Protection" },
    { imageSrc: aipowered.src, title: "AI-powered medical assistant" },

    // Add more items as needed
  ]

  return (
    <>
      <Navbar />
      <h2 className=" text-6xl text-purple-600 text-center mt-20">
        Ask For Help!
      </h2>
      <div className={style.topContainer}>
        <h3>Hi, I am here to develop this page.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          repudiandae facere ipsam quod ut, ullam aliquam rerum nulla excepturi,
          tempora facilis id. Dolores atque at nihil animi vel ipsum cum.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          laudantium dolores, perspiciatis ea aut quos illo molestiae.
          Voluptatibus velit perferendis rem pariatur temporibus assumenda nemo
          nam quaerat aut architecto.
        </p>
      </div>
      <div className={style.parentContainer}>
        {/* <div className={style.childContainer}>
          <h3>Enable voice & gesture SOS Activation</h3>
        </div> */}
        <div className={style.gridContainer}>
          {gridData.map((item, index) => (
            <GridItem key={index} imageSrc={item.imageSrc} title={item.title} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AskForHelp
