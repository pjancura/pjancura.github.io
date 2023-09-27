import { Injectable } from '@angular/core';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  assets : Asset[] = [
    {
      title: 'linkedin_logo',
      whereUsed: 'footer Component on home page',
      url: "assets/icons/linkedin_logo.svg",
      altText: "linkedin_logo.svg"
    },
    {
      title: 'github_logo',
      whereUsed: 'footer Component on home page',
      url: "assets/icons/github_logo.svg",
      altText: 'github_logo.svg'
    },
    {
      title: 'resume',
      whereUsed: 'aboutMe Component',
      url: "assets/downloadables/jancura_resume.pdf",
    },
    {
      title: 'download_icon',
      whereUsed: 'aboutMe Component',
      url: "assets/icons/download_icon.svg",
      altText: 'download_icon.svg'
    },
  ]


  constructor() { }
  
  getTitleArray(): String[] {
    const assetTitle: String[] = [];
    for (let i = 0; i < this.assets.length; i++){
        assetTitle.push(this.assets[i].title);
    }
    return assetTitle;
  };

  getAsset(assetTitle: string): Asset {
    const titleArray : String[] = this.getTitleArray();
    return this.assets[titleArray.indexOf(assetTitle)];
  };
}
