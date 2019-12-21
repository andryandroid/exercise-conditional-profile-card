import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let name = "Name";
  if (variables.name != null) name = variables.name;

  let lastname = "lastname";
  if (variables.lastname != null) lastname = variables.lastname;

  let city = "city";
  if (variables.city != null) city = variables.city;

  let country = "country";
  if (variables.country != null) country = variables.country;

  let rol = "";
  if (variables.role != null) rol = variables.role;

  let socialMediaPosition = "left";
  if (variables.socialMediaPosition != null)
    socialMediaPosition = variables.socialMediaPosition;

  let role = "";
  if (variables.role != null) role = variables.role;

  let socialTwitter = "";
  if (variables.twitter != null) {
    socialTwitter = `<li><a href='https://twitter.com/${
      variables.twitter
    }'><i class="fa fa-twitter"></i></a></li>`;
  }
  let socialGithub = "";
  if (variables.github != null) {
    socialGithub = `<li><a href="https://github.com/${
      variables.github
    }"><i class="fa fa-github"></i></a></li>`;
  }
  let socialLinkedin = "";
  if (variables.linkedin != null) {
    socialLinkedin = `<li><a href="https://linkedin.com/${
      variables.linkedin
    }"><i class="fa fa-linkedin"></i></a></li>`;
  }
  let socialInstagram = "";
  if (variables.instagram != null) {
    socialInstagram = `<li><a href="https://instagram.com/${
      variables.instagram
    }"><i class="fa fa-instagram"></i></a></li>`;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${rol}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${socialMediaPosition}">
            ${socialTwitter}
            ${socialGithub}
            ${socialLinkedin}
            ${socialInstagram}
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
