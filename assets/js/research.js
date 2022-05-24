/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Bangla Abusive Language Detection using Machine Learning on Radio Message Gateway",
    authors:
      "Sumaiya Salim Ritu, Joysurya Mondal, Md. Moinu Mia, Ahmed Al Marouf",
    conferences:
      "International Conference on Communication and Electronics Systems",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/bl.jpg",
    citation: {
      vancouver:
        "Ritu, Sumaiya & Mondal, Joysurya & Mia, Md & Marouf, Ahmed. (2021). Bangla Abusive Language Detection using Machine Learning on Radio Message Gateway. 1725-1729. 10.1109/ICCES51350.2021.9489131.",
    },
    abstract:
      "In the era of modern technology, machine learning and natural language processing has been adopted to be applied in several application areas. Natural language processing consists of diversified techniques such as text classification, text summarization, named entity recognition, sentiment analysis. Text classification is considered to be the area of research where the text gets segmented into different category sentences or paragraphs from a single text genre. This paper presents a mechanism for detecting Bangla abusive language from a realtime radio message gateway. Online radio stations nowadays accept communications and voices of their target audience from web-based applications or social media platforms, such as Facebook or Twitter pages. This paper has created a dataset with more than 45000 Bangla sentences, which are labeled as abusive and non-abusive. Sample online radio message gateway has been been introduced and machine learning algorithms such as multinomial naive bias (MNB), logistic regression (LR), and random forest (RF) classifiers are utilized to predict the abusive languages. One of the significant prospects of this work would be applied during live radio programs where listeners try to communicate by sending live messages. Our proposed mechanism can check and map the live messages with the dataset and segregate the positive comments or messages only, by filtering the abusive comments. Among the applied classifiers, it has been found that the random forest classifier has performed better than the other two classifiers by leveraging approximately 76% accuracy.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
