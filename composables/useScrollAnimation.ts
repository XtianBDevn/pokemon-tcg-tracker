import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimation = () => {
  let scrollTriggers: ScrollTrigger[] = []

  onMounted(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Hero animations timeline
    const heroTL = gsap.timeline({ defaults: { ease: 'power4.out' } })

    heroTL
      .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to('.scroll-indicator', { opacity: 1, duration: 0.5 }, '-=0.3')

    // Feature cards staggered animation
    const featureCards = gsap.utils.toArray('.feature-card')
    featureCards.forEach((card: any) => {
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        onEnter: () => {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
          })
        },
        once: true
      })
      scrollTriggers.push(trigger)
    })

    // Parallax effect on pokeball sprites (if they exist)
    const sprites = gsap.utils.toArray('.pokeball-sprite')
    if (sprites.length > 0) {
      sprites.forEach((sprite: any) => {
        gsap.to(sprite, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      })
    }

    // Section fade-in animations
    const sections = gsap.utils.toArray('section')
    sections.forEach((section: any, index: number) => {
      if (index === 0) return // Skip hero section

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        onEnter: () => {
          gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
          })
        },
        once: true
      })
      scrollTriggers.push(trigger)
    })
  })

  onUnmounted(() => {
    // Clean up ScrollTriggers
    scrollTriggers.forEach(trigger => trigger.kill())
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return {
    // Expose any methods if needed
  }
}
