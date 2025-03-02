export function initFooterScroll() {
  const footerWrapper = document.querySelector(".footer__results_wrapper");

  if (!footerWrapper) return;

  let isScrollingFooter = false;
  let startY = 0;

  document.addEventListener(
    "wheel",
    function (event) {
      const body = document.documentElement;
      const atPageBottom =
        window.innerHeight + window.scrollY >= body.scrollHeight;
      const atTop = footerWrapper.scrollTop === 0;

      if (atPageBottom && !isScrollingFooter) {
        isScrollingFooter = true;
        footerWrapper.focus();
        footerWrapper.scrollBy({ top: event.deltaY });
        event.preventDefault();
      }

      if (isScrollingFooter) {
        footerWrapper.scrollBy({ top: event.deltaY });
        event.preventDefault();

        if (atTop && event.deltaY < 0) {
          isScrollingFooter = false;
          document.body.focus();
          window.scrollBy({ top: -10 });
        }
      }
    },
    { passive: false }
  );

  document.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });

  document.addEventListener(
    "touchmove",
    function (event) {
      const deltaY = startY - event.touches[0].clientY;
      const body = document.documentElement;
      const atPageBottom =
        window.innerHeight + window.scrollY >= body.scrollHeight;
      const atTop = footerWrapper.scrollTop === 0;

      if (atPageBottom && !isScrollingFooter) {
        isScrollingFooter = true;
        footerWrapper.focus();
        footerWrapper.scrollBy({ top: deltaY });
        event.preventDefault();
      }

      if (isScrollingFooter) {
        footerWrapper.scrollBy({ top: deltaY });
        event.preventDefault();

        if (atTop && deltaY > 0) {
          isScrollingFooter = false;
          document.body.focus();
          window.scrollBy({ top: -10 });
        }
      }
    },
    { passive: false }
  );
}
