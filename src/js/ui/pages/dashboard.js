import "../../../sass/index.scss";
import "../../../sass/style.scss";
import { showFormattedDateTime } from "../../utils/datetime";
import navbar from "../component/container/navbar";
import footer from "../component/container/footer";
import listitem from "../component/contents/content";
 
const Dashboard = {
  async init() {
    await this._initialData();
  },
 
  async _initialData() {
    const fetchStory = await fetch('/data/data.json');
    const responseStory = await fetchStory.json();
    this._myStory = responseStory.listStory;
    const myStory = localStorage.getItem('myStory');
    if (myStory) {
      this._myStory.push(JSON.parse(myStory));
    }
    this._populateStoryRecordToCard(this._myStory);
  },
 
  _populateStoryRecordToCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(`Parameter listStory should be an object. The value is ${listStory}`);
    }
    if (!Array.isArray(listStory)) {
      throw new Error(`Parameter listStory should be an array. The value is ${listStory}`);
    }
    const recordBodyCard = document.querySelector('.home-container1');
    recordBodyCard.innerHTML = '';
    if (listStory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }
    listStory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listStory[idx]);
    });
  },
 
  _templateBodyCard(index, storyRecord) {
    let timezonename;
    const url = new URL(window.location.href);
    const urlparameter = url.searchParams.get('lang');
    if (urlparameter === 'id') {
      timezonename = 'id-ID';
    } else if (urlparameter === 'en') {
      timezonename = 'en';
    } else if (urlparameter === null) {
      timezonename = 'en';
    }
    const date = showFormattedDateTime(timezonename, storyRecord.createdAt);
    return `
      <content-tamplate
        class="card m-3 gallery-card3-gallery-card"
        image="${storyRecord.photoUrl}"
        name="${storyRecord.name}"
        description="${storyRecord.description}"
        createdAt="${date}"
      >
      </content-tamplate>
    `;
  },
 
  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list cerita</div>
    `;
  },
};
 
export default Dashboard;
