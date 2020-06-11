class SectionHover {

  constructor() {

     this.sections = document.querySelectorAll("section");
     this.navLinks = document.querySelectorAll("nav a");
     
  }

  sectionNavHover() {

        const navLink = this.navLinks;
        
        this.sections.forEach(section => {
        section.addEventListener("mouseenter", function() {

          const id = section.getAttribute("id");

          const navActive = document.querySelector(`a[href="#${id}"]`);

          navLink.forEach(link => link.classList.remove("active"));

          navActive.classList.add("active");

        });
    });

  }

}
