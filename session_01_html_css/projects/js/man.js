const skillBars =
    document.querySelectorAll(".skill-progress");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width =
                    bar.dataset.width;

                bar.style.width = width;
            }
        });

    }, {
        threshold: 0.5
    });

skillBars.forEach((bar) => {
    observer.observe(bar);
});