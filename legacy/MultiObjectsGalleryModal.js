import WistiaEmbed from '../components/wistia_embed'
import NoSSR from 'react-no-ssr'

export default class MultiObjectGalleryModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actualItem: 0
    }
  }

  changeNext = (event, totalElements) => {
    event.preventDefault()
    const updateItem = this.state.actualItem === totalElements - 1 ? 0 : this.state.actualItem + 1
    this.setState({ actualItem: updateItem })
  }

  changePrev = (event, totalElements) => {
    event.preventDefault()
    const updateItem = this.state.actualItem === 0 ? totalElements - 1 : this.state.actualItem - 1
    this.setState({ actualItem: updateItem })
  }

  changeElement = (event, picIndex) => {
    event.preventDefault()
    this.setState({ actualItem: picIndex })
  }

  getPicPath = (galUrl, ProjectUrl, folder, pictureName) => {
    return `static/pics/${galUrl}/${ProjectUrl}/${folder}/${pictureName}`
  }

  splitText = chain => {
    const toReturn = chain ? chain.split("\n").map((item, i) => <span>
      {item}</span>) : ""
    return toReturn
  }

  render() {
    const { closeProject, projectInfo, galleryName } = this.props
    const { actualItem } = this.state

    let galleryElements = []
    if (projectInfo.videoQqCode) {
      galleryElements = [["QQvideo", projectInfo.videoQqCode]]
    }
    if (projectInfo.videoWistiaCode) {
      galleryElements = [["WistiaVideo", projectInfo.videoWistiaCode]]
    }
    if (projectInfo.videoVimeoCode) {
      projectInfo.videoVimeoCode.map(code => {
        galleryElements.push(["VimeoVideo", code])
      })
    }
    if (projectInfo.pictures) {
      projectInfo.pictures.map(pic => {
        galleryElements.push(["image", pic])
      })
    }

    const hasMultiplePictures = galleryElements.length > 1 ? true : false
    const hasDescription = projectInfo.explanation !== "" ? true : false
    let wrapperStyle = hasMultiplePictures ? "multiplePictures" : "singlePicture"
    wrapperStyle += hasDescription ? " hasDescription" : " withoutDescription"

    return (
      <div id="modalGallery"
        className={wrapperStyle}>

        <div id="picContainer">
          {
            galleryElements.length > 1 && (
              <div id="picCounter">
                {
                  `${actualItem + 1
                  } of ${galleryElements.length
                  }`
                } </div>
            )
          }
          {
            galleryElements[actualItem][0] === "image" && (
              <img src={
                this.getPicPath(galleryName, projectInfo.url, "big", galleryElements[actualItem][1])
              } />
            )
          }
          {
            galleryElements[actualItem][0] === "QQvideo" && (
              <iframe frameBorder="0"
                src={
                  `https://v.qq.com/txp/iframe/player.html?vid=${galleryElements[actualItem][1]
                  }`
                }
                allowFullScreen={true}></iframe>
            )
          }
          {
            galleryElements[actualItem][0] === "WistiaVideo" && (
              <NoSSR>
                <WistiaEmbed hashedId={
                  galleryElements[actualItem][1]
                }
                  playerColor="#56be8e" />
              </NoSSR>
            )
          }
          {
            galleryElements[actualItem][0] === "VimeoVideo" && (
              <iframe src={`https://player.vimeo.com/video/${galleryElements[actualItem][1]}`} frameborder={"0"} allow={"autoplay; fullscreen"} allowfullscreen={true}></iframe>
            )
          }</div>
        {
          hasDescription && (
            <div id="explanationBox">
              <h1>{
                projectInfo.explanation.title
              }</h1>
              {
                projectInfo.explanation.materials !== "" && (
                  <span>{
                    projectInfo.explanation.materials
                  }</span>
                )
              }
              {
                <p>{this.splitText(projectInfo.explanation.explanation)}</p>
              } </div>
          )
        }

        {
          hasMultiplePictures && (
            <div id="navBar">
              <div id="modalPrev" className="modalButton">
                <a onClick={
                  e => this.changePrev(e, galleryElements.length)
                }>
                  Previous
                            </a>
              </div>
              <div id="navThumbs">
                {
                  galleryElements.map((element, index) => {
                    const aStyle = index === actualItem ? "actual" : ""
                    const picURL = element[0] === "image" ? element[1] : "video-default.jpg"
                    return (
                      <a onClick={
                        e => this.changeElement(e, index, element[0])
                      }
                        className={aStyle}
                        key={index}>
                        <img src={
                          this.getPicPath(galleryName, projectInfo.url, "th", picURL)
                        } />
                      </a>
                    )
                  })
                } </div>
              <div id="modalNext" className="modalButton">
                <a onClick={
                  e => this.changeNext(e, galleryElements.length)
                }>Next</a>
              </div>
            </div>
          )
        }

        <div id="modalClose" className="modalButton">
          <a onClick={closeProject}>Close</a>
        </div>

        <style jsx>
          {`
            #modalGallery {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: rgba(0, 0, 0, 0.88);
              z-index: 100;
              display: grid;
              grid-template-columns: [prev] 10vw [nav] auto [next] 12vw [close] 12vw [end];
              grid-template-rows: [image] 80% [navbar] 20vh [end];
            }
            #picContainer {
              grid-column: prev / next;
              grid-row: image / navbar;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            #explanationBox {
              background-color: rgba(0, 0, 0, 0.57);
              padding: 40px 35px 20px;
              overflow: auto;
              grid-column: next / end;
              grid-row: image / navbar;
            }
            #navBar {
              grid-column: prev / close;
              display: grid;
              grid-template-columns: [prev] 10vw [nav] auto [next] 12vw [close];
            }
            #navThumbs {
              display: flex;
              flex-wrap: nowrap;
              overflow-x: auto;
              justify-content: flex-start;
              align-items: center;
            }
            #modalClose {
              grid-column: close / end;
            }
            #modalGallery.singlePicture #picContainer {
              grid-row: image / end;
            }
            #picContainer img {
              width: auto;
              height: auto;
              max-height: 100%;
              max-width: 100%;
            }
            iframe {
              width: 80vw;
              height: 71vh;
            }
            #modalGallery.singlePicture #explanationBox {
              grid-row: image / navbar;
            }
            .modalButton {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .modalButton a {
              width: 71px;
              height: 71px;
              background-image: url(/static/css/modal-nav.png);
              text-indent: -10000px;
            }
            .modalButton a:hover {
              background-position-x: right;
              cursor: pointer;
            }
            #modalPrev a {
              background-position-y: bottom;
            }
            #modalNext a {
              background-position-y: center;
            }
            #picCounter {
              position: absolute;
              left: 30%;
              top: 10px;
              background-color: rgba(0, 0, 0, 0.79);
              width: 120px;
              height: 24px;
              text-align: center;
              color: #8e8e8e;
              font-size: 0.8em;
              padding-top: 6px;
              border-radius: 20px;
            }
            #navThumbs a {
              width: 110px;
              min-width: 110px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin: 0 7px;
            }
            #navThumbs img {
              width: auto;
              height: auto;
              max-height: 90%;
              max-width: 90%;
            }
            h1 {
              margin-top: 0;
              font: 1.3em raleway-black;
              color: white;
            }
            span {
              font-family: raleway-semibold;
              color: #d2d2d2;
            }
            p {
              font-size: 0.9em;
              color: white;
            }
            a.actual img {
              border-right: 5px solid #e7e7e7;
              border-left: 5px solid #e7e7e7;
              margin-left: -5px;
            }
            @media only screen and (max-width: 600px) {
              #modalGallery {
                grid-template-columns: auto 80px;
                grid-template-rows: 100px auto 40vh;
                grid-template-areas:
                  "nav close"
                  "picture picture"
                  "explanation explanation";
              }
              #modalGallery.singlePicture.hasDescription {
                grid-template-rows: [start]auto[picture] 80px [close] 40vh[description];
                grid-template-columns: [start]auto[close] 80px [end];
              }
              #navBar {
                grid-area: nav;
                grid-template-columns: 80px auto 80px;
                grid-template-rows: 100px;
                grid-template-areas: "prev thumbs next";
              }
              #picContainer {
                grid-area: picture;
              }
              #modalGallery.singlePicture.hasDescription #picContainer {
                grid-column: start / description;
                grid-row: start / close;
              }
              #modalGallery.singlePicture.hasDescription #modalClose {
                grid-column: close / end;
                grid-row: picture / close;
              }
              #modalGallery.singlePicture.hasDescription #explanationBox {
                grid-column: start / close;
                grid-row: picture / description;
                margin-right: 80px;
              }
              #explanationBox {
                grid-area: explanation;
                padding-bottom: 50px;
              }
              #modalPrev {
                grid-area: prev;
              }
              #modalNext {
                grid-area: next;
              }
              #modalClose {
                grid-area: close;
              }
              #navThumbs {
                grid-area: thumbs;
              }
              #picContainer img {
                max-height: 50vh;
              }
            }
          `} </style>
      </div>
    )
  }
}
