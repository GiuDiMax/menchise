import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ImageCarousel() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        <CarouselItem>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src="/images/main/DSC_8507.jpeg" className="w-full h-[300px] md:h-[500px] object-cover" alt="Ambiente 1" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src="/images/main/Sala Arancio.jpeg" className="w-full h-[300px] md:h-[500px] object-cover" alt="Sala Arancio" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src="/images/main/Sala celeste.jpeg" className="w-full h-[300px] md:h-[500px] object-cover" alt="Sala Celeste" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src="/images/main/DSC_8530.jpeg" className="w-full h-[300px] md:h-[500px] object-cover" alt="Ambiente 4" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img src="/images/main/2023-05-24.jpeg" className="w-full h-[300px] md:h-[500px] object-cover" alt="Ambiente 5" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
