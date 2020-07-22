'use strict';
// Get data form json file and create new instance
$.get('data/page-1.json').then (data => {
  data.forEach(element => {
    let imageObj = new Image(element.image_url, element.keyword,element.title);
    imageObj.render();
  });

  $('#photo-template').hide();
  createOptions(options);
});

//  constructor for images objects becuase in html there is
//h2 and keyword and img
var array = [];
var options = [];
function Image (image_url, keyword, title) {
  this.image_url = image_url;
  this.keyword = keyword;
  this.title = title;
  array.push(this);
  options.push(keyword);
}

// methode render the images
Image.prototype.render = function () {
  let sectionTemplate = $('#photo-template').clone().removeAttr('id');
  sectionTemplate.attr('class', this.keyword);
  sectionTemplate.find('h2').text(this.keyword);
  sectionTemplate.find('img').attr('src', this.image_url);
  sectionTemplate.find('p').text(this.title);
  sectionTemplate.append('main');
  if(!keyword.includes(img.keyword)) {
                keywords.push(img.keyword);
};



// creating options for select input

    keywords.forEach(keyword =>{
        let options = $('option');
        let cloneOptions = options.clone();
        cloneOptions.attr('value', keyword);
        cloneOptions.text(keyword);
        $('select').append(cloneOptions[0]);
    });
 
//Show selected images
// showSelected();
// function showSelected() {
//   $('select').change(function () {
//     let selected = $(this).val();
//     $('section').hide();
//     $(`.${selected}`).show();
//   });
// }
    $('select').change(event =>{
        $('section').each(function(){
            $(this).show();
            if(event.target.value == 'default'){
                $(this).show();
            }else if($(this).attr('id') !== event.target.value){
                $(this).hide();
            }if($(this).attr('class') === event.target.value){
                $(this).toggle();
            }
        });
    });

