import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // url = 'https://rest-api-mern.herokuapp.com/products/atb';
  // pageData = {};
  pageData = {
    pageId: 1,
    title: "SCOOP & SPOON Transforming Tourism with a Paradigm Shift",
    subtitle: "subTitle",
    content: "In less than a year, the way the world does business has been transformed. Some organisations have struggled, but others, such as the Austrian National Tourist Office, have sought new business models and practices in order to flourish despite these challenges.",
    bannerImage: "http://prishtinatask.scoopandspoon.at/assets/bannerImage.png",
    logoSnS: "http://prishtinatask.scoopandspoon.at/assets/sns-logo.svg",
    logoANTO: "http://prishtinatask.scoopandspoon.at/assets/logo_oewerbung-Black.png",
    firstSectionImage1: "http://prishtinatask.scoopandspoon.at/assets/Paradigm-Shift.png",
    firstSectionImage2: "http://prishtinatask.scoopandspoon.at/assets/Hotspot.png",
    slider: {
    description: "SCOOP & SPOON New Challenges, New Opportunities, New Success",
    leftArrow: "http://prishtinatask.scoopandspoon.at/assets/icones/Arrow-Left-Black.svg",
    rightArrow: "http://prishtinatask.scoopandspoon.at/assets/icones/Arrow-Right-Black.svg",
    slides: [
    {
    id: "1",
    image: "http://prishtinatask.scoopandspoon.at/assets/Culinary.jpg",
    title: "Culinary",
    link: "#"
    },
    {
    id: "2",
    image: "http://prishtinatask.scoopandspoon.at/assets/Feel.jpg",
    title: "Feel",
    link: "#"
    },
    {
    id: "3",
    image: "http://prishtinatask.scoopandspoon.at/assets/Keynote.jpg",
    title: "Keynote",
    link: "#"
    }
    ]
    },
    thirdSectionLeftContent: "By partnering with our talented team at SCOOP & SPOON, the Austrian National Tourist Office discovered that their old marketing methods were no longer viable in the face of the global pandemic. So, with our help, they transformed the crisis into an opportunity to break down old barriers, overcome new obstacles, and shine like never before.",
    thirdSectionRightContent: "Each year, in an industry expo event, the natural and cultural assets of Austria are shared with the global tourism industry. We developed an innovative platform to take the event online, while maintaining the effectiveness and impact of the physical event. ",
    footer: "Using our proven 360° virtual environment, we created atb.virtual.2020 – an immersive, emotional online experience, that set a new standard for digital event planning."
    }

  // constructor(private http: HttpClient) {
  //   this.http.get(this.url).toPromise().then(data => {
  //     this.pageData = data;
  //   });
  // }

  title = 'atb-show';
}
