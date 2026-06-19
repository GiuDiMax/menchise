import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-6xl mx-auto items-center justify-between px-4">
        
        {/* Logo */}
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <img src="/images/logo.webp" alt="Studio Menchise" className="h-12 w-auto" width="200" height="48" />
          </a>
        </div>
        
        {/* Desktop Nav - Shadcn NavigationMenu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold px-4 py-2")}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/#ambienti" className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold px-4 py-2")}>
                  Ambienti
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold px-4 py-2">Servizi</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
                    <ListItem href="/radiologia" title="Radiologia" />
                    <ListItem href="/igiene" title="Igiene e Profilassi" />
                    <ListItem href="/chirurgia" title="Chirurgia" />
                    <ListItem href="/conservativa-diretta" title="Conservativa Diretta" />
                    <ListItem href="/conservativa-indiretta" title="Conservativa Indiretta" />
                    <ListItem href="/terapia-canalare" title="Terapia Canalare" />
                    <ListItem href="/protesi-fissa" title="Protesi Fissa" />
                    <ListItem href="/protesi-mobile" title="Protesi Mobile" />
                    <ListItem href="/ortodonzia" title="Ortodonzia" />
                    <ListItem href="/parodontologia" title="Parodontologia" />
                    <ListItem href="/impianti" title="Impianti" />
                    <ListItem href="/intarsi" title="Intarsi" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/#cta" className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold px-4 py-2")}>
                  Contatti
                </NavigationMenuLink>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Nav - Shadcn Sheet & Accordion */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 w-10 text-foreground">
              <i className="fa-solid fa-bars text-2xl"></i>
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto bg-background/95 backdrop-blur-xl border-l border-border/50 p-6 flex flex-col h-full">
              
              <SheetHeader className="pb-6 border-b border-border/10 mb-6">
                <div className="flex justify-start">
                   <img src="/images/logo.webp" alt="Studio Menchise" className="h-10 w-auto" width="166" height="40" />
                </div>
              </SheetHeader>
              
              <div className="flex-1 flex flex-col gap-4">
                <a href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-primary transition-colors p-2 rounded-2xl hover:bg-primary/5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0">
                    <i className="fa-solid fa-house"></i>
                  </div>
                  Home
                </a>
                
                <a href="/#ambienti" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-primary transition-colors p-2 rounded-2xl hover:bg-primary/5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0">
                    <i className="fa-solid fa-couch"></i>
                  </div>
                  Ambienti
                </a>
                
                <Accordion type="single" collapsible className="w-full border-none">
                  <AccordionItem value="servizi" className="border-none">
                    <AccordionTrigger className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-primary transition-colors p-2 rounded-2xl hover:bg-primary/5 py-2 [&[data-state=open]]:bg-primary/5 [&[data-state=open]]:text-primary hover:no-underline">
                      <div className="flex items-center gap-4 flex-1 text-left">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                          <i className="fa-solid fa-tooth"></i>
                        </div>
                        Servizi
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2 px-2">
                      <div className="grid grid-cols-1 gap-2 pl-4 ml-4">
                        <a href="/radiologia" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Radiologia</a>
                        <a href="/igiene" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Igiene e Profilassi</a>
                        <a href="/chirurgia" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Chirurgia</a>
                        <a href="/conservativa-diretta" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Conservativa Diretta</a>
                        <a href="/conservativa-indiretta" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Conservativa Indiretta</a>
                        <a href="/terapia-canalare" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Terapia Canalare</a>
                        <a href="/protesi-fissa" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Protesi Fissa</a>
                        <a href="/protesi-mobile" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Protesi Mobile</a>
                        <a href="/ortodonzia" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Ortodonzia</a>
                        <a href="/parodontologia" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Parodontologia</a>
                        <a href="/impianti" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Impianti</a>
                        <a href="/intarsi" onClick={() => setIsOpen(false)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 flex items-center gap-2"><i className="fa-solid fa-angle-right text-xs text-primary/50"></i> Intarsi</a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <a href="/#cta" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-xl font-bold text-foreground hover:text-primary transition-colors p-2 rounded-2xl hover:bg-primary/5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  Contatti
                </a>
              </div>

              {/* Mobile Footer / CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-border/10 flex justify-center gap-6 pb-8">
                <a href="tel:0805210939" className="w-14 h-14 rounded-full bg-secondary text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors shadow-lg">
                  <i className="fa-solid fa-phone text-2xl"></i>
                  <span className="sr-only">Chiamaci Ora</span>
                </a>
                <a href="https://wa.me/393474013371" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-secondary text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors shadow-lg">
                  <i className="fa-brands fa-whatsapp text-[1.75rem]"></i>
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
              
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-base font-semibold leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        )}
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
