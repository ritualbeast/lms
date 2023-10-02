class SVGManager {
    constructor() {
      this.svgCollection = {};
    }
  
    addSVG(name, svg) {
      this.svgCollection[name] = svg;
    }
  
    getSVG(name) {
      return this.svgCollection[name];
    }
}
    
const svgManager = new SVGManager();


svgManager.addSVG('x',                      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(32, 32, 32, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>')
svgManager.addSVG('home',                   '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4167 8.48419L12.5281 4.68186C11.6456 3.99525 10.4095 3.99525 9.52696 4.68186L4.63746 8.48419C4.042 8.94726 3.69386 9.65944 3.69421 10.4138V17.0138C3.69421 18.0263 4.51503 18.8471 5.52755 18.8471H16.5275C17.5401 18.8471 18.3609 18.0263 18.3609 17.0138V10.4138C18.3609 9.65936 18.0125 8.94711 17.4167 8.48419" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6666 14.2499C12.6408 15.4718 9.35731 15.4718 7.33331 14.2499" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')
svgManager.addSVG('users',                  '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="8.24998" cy="6.91667" rx="3.66667" ry="3.66667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.75 19.75V17.9167C2.75 15.8916 4.39162 14.25 6.41667 14.25H10.0833C12.1084 14.25 13.75 15.8916 13.75 17.9167V19.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6667 3.36905C16.2891 3.78445 17.4239 5.24637 17.4239 6.92113C17.4239 8.59589 16.2891 10.0578 14.6667 10.4732" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.25 19.7499V17.9166C19.2404 16.2524 18.1113 14.8034 16.5 14.3874" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')

export default svgManager;