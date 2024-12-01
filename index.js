document.addEventListener('DOMContentLoaded', (event) => {
    const appleStore = document.getElementById('appleStore');
    appleStore.addEventListener('click', (event)=>{
        event.preventDefault();
        alert('Redirecting to Apple App Store...');
        window.location.href = 'https://apps.apple.com/your-app-link';
    });

    const googleStore = document.getElementById('googleStore');
    googleStore.addEventListener('click', (event)=>{
        event.preventDefault();
        alert('Redirecting to Google Play Store...');
        window.location.href = 'https://play.google.com/store/apps/your-app-link';
    });


    var imgElement = document.getElementById('heroimg');

    function changeImageBasedOnScreenSize() {
        if(window.matchMedia("(max-width: 768px)").matches) {
            imgElement.src = "assets/MobileHand.png";
        }
        else {
            imgElement.src = "assets/hero.png";
        }
    }

    changeImageBasedOnScreenSize();

    window.addEventListener('resize', changeImageBasedOnScreenSize);
    
});