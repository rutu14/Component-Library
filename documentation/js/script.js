/* Tab working */
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');
tabs.forEach(tab => { tab.addEventListener( 'click', changeTabs ); });           
  
function changeTabs(e) {
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;
  
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute('aria-selected', false));
  
    target.setAttribute('aria-selected', true);

    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.setAttribute('hidden', true));
      
    grandparent.parentNode
      .querySelector(`#${target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
  }

const themeMobile = document.querySelector('#mobile-theme');
const themeDesktop = document.querySelector('#desktop-theme');

function switchTheme(e) {
  if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      themeMobile.checked = true;
      themeDesktop.checked = true;
  } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      themeMobile.checked = false;
      themeDesktop.checked = false;
  }    
}

themeMobile.addEventListener('change', switchTheme, false);
themeDesktop.addEventListener('change', switchTheme, false);

if (document.documentElement.getAttribute("data-theme") == "dark"){
    themeMobile.checked = true;
    themeDesktop.checked = true;
}


