"use client";

import Image from "next/image";
import {
  Accordion,
  Anchor,
  Badge,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/seo";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconCalendarEvent,
  IconHeartHandshake,
  IconLeaf,
  IconMapPin,
  IconMessageCircleHeart,
  IconPlayerPlayFilled,
  IconSparkles,
  IconStarFilled,
  IconUsersGroup,
} from "@tabler/icons-react";

const WHATSAPP_FAB_TEXT = "WhatsApp";
const WHATSAPP_ARIA_PHONE = "11 2366-3477";

const NAV = [
  { label: "La Consultora", href: "#consultora" },
  { label: "Acompañamiento", href: "#acompanamiento" },
  { label: "El Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

const CONTACTO_FILAS = [
  {
    id: "modalidad",
    texto: "Modalidad de Atención: Virtual",
    icon: "calendar" as const,
  },
  {
    id: "whatsapp",
    texto: "Whatsapp: +54 9 11 2366-3477",
    icon: "whatsapp" as const,
    href: WHATSAPP_URL,
  },
  {
    id: "instagram",
    texto: "Instagram: @ticonsultorapsicologica",
    icon: "instagram" as const,
    href: INSTAGRAM_URL,
  },
];

const PASOS = [
  { n: "1", title: "Contacto", text: "Me escribís por Mensaje Directo o Whatsapp al 11 2368 3477 para agendar tu primera sesión." },
  { n: "2", title: "Encuentro", text: "Nos encontramos de forma virtual para tu comodidad y así crear un espacio de empatía y conexión mutua." },
  { n: "3", title: "Proceso", text: "Trabajamos juntos desde el Counseling, a tu propio ritmo, enfocándonos en el presente y tus recursos." },
  { n: "4", title: "Transformación", text: "Lográs desaprender lo que no sirve, superás bloqueos y comenzás a diseñar quien querés ser." },
];

const AREAS = [
  {
    title: "Desarrollo personal",
    body: "Fortalecer recursos emocionales para vivir con más claridad y confianza.",
  },
  {
    title: "Superación de bloqueos",
    body: "Trabajar miedos, ansiedad y patrones repetitivos desde una mirada práctica.",
  },
  {
    title: "Procesos de cambio",
    body: "Acompañar transiciones, decisiones y nuevos desafíos con contención profesional.",
  },
];

const TESTIMONIOS = [
  {
    quote:
      "“Sentí que mi historia podía ser ordenada sin juicio. Me llevé herramientas reales para mi día a día.”",
    meta: "Martina V. · Sesiones virtuales",
  },
  {
    quote:
      "“En pocas semanas empecé a ver cambios concretos en mis vínculos y en mi forma de hablarme.”",
    meta: "Carlos P. · Supervisión de bienestar",
  },
  {
    quote:
      "“Lo que más valoro es la combinación entre empatía y método. Me sentí acompañada en serio.”",
    meta: "Silvia B. · Desarrollo personal",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Qué es el counseling o consultoría psicológica?",
    a: "Es un espacio de acompañamiento profesional para trabajar procesos personales con escucha, claridad y herramientas concretas.",
  },
  {
    q: "¿Cómo es la modalidad de las sesiones?",
    a: "Podés elegir modalidad virtual o presencial. Se acuerda según tu disponibilidad y objetivos.",
  },
  {
    q: "¿Cuánto dura el proceso de acompañamiento?",
    a: "Cada proceso es único. Se define en conjunto y se revisa periódicamente según avances.",
  },
];

function VioletInTitle({
  children,
  on = "dark",
}: {
  children: React.ReactNode;
  on?: "dark" | "light";
}) {
  const color =
    on === "dark"
      ? "var(--mantine-color-violetPop-7)"
      : "var(--mantine-color-violetPop-1)";
  return (
    <span
      style={{
        color,
        fontWeight: 900,
        fontSize: "inherit",
        lineHeight: "inherit",
        fontFamily: "inherit",
        WebkitTextStroke: "0.28px currentColor",
      }}
    >
      {children}
    </span>
  );
}

function SectionShell({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <Box component="section" id={id} py={{ base: 48, sm: 56, md: 80 }} className="tl-section">
      <Container size="lg" px={{ base: "xs", xs: "sm", md: "md" }}>
        {children}
      </Container>
    </Box>
  );
}

export default function Home() {
  const [menu, menuHandlers] = useDisclosure(false);

  return (
    <Box component="main" mih="100vh" className="site-shell tl-page-root">
      <Box className="site-bg" aria-hidden="true">
        <Box className="site-bg-mesh" aria-hidden="true" />
        <Box className="site-orb site-orb-a" />
        <Box className="site-orb site-orb-b" />
        <Box className="site-orb site-orb-c" />
      </Box>

      <Box
        component="header"
        w="100%"
        pos="sticky"
        top={0}
        style={{
          zIndex: 90,
          borderBottom: "1px solid rgba(80, 70, 120, 0.14)",
          backgroundColor: "rgba(255, 255, 255, 0.76)",
          backdropFilter: "blur(14px) saturate(1.05)",
          WebkitBackdropFilter: "blur(14px) saturate(1.05)",
        }}
      >
        <Container fluid px={{ base: "xs", sm: "md", md: "xl" }} py={{ base: "sm", md: "md" }}>
          <Group justify="space-between" align="center" wrap="nowrap" gap="xs">
            <Anchor
              href="#inicio"
              underline="never"
              c="slate.9"
              style={{ minWidth: 0, flex: "1 1 auto" }}
            >
              <Group gap="sm" wrap="nowrap" style={{ minWidth: 0 }}>
                <Image
                  src="/logo.PNG"
                  alt="Thompson Lorena"
                  width={142}
                  height={40}
                  sizes="(max-width: 480px) 110px, 142px"
                  style={{
                    height: "clamp(32px, 8vw, 40px)",
                    width: "auto",
                    maxWidth: "min(142px, 38vw)",
                    borderRadius: 8,
                  }}
                  priority
                />
                <Box visibleFrom="sm">
                  <Text
                    fw={700}
                    size="lg"
                    c="slate.9"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Thompson Lorena
                  </Text>
                  <Text size="xs" c="slate.6" tt="uppercase" lts={1.5}>
                    Consultora Psicológica
                  </Text>
                </Box>
              </Group>
            </Anchor>

            <Group
              gap="xs"
              wrap="nowrap"
              justify="flex-end"
              style={{ marginLeft: "auto", flexShrink: 0 }}
            >
              <Group gap="lg" visibleFrom="md" wrap="nowrap">
                {NAV.map((item) => (
                  <Anchor
                    key={item.href}
                    href={item.href}
                    size="sm"
                    c="slate.7"
                    fw={600}
                    underline="never"
                    className="nav-hover"
                  >
                    {item.label}
                  </Anchor>
                ))}
              </Group>

              <Button
                component="a"
                href="#turnos"
                size="md"
                color="violetPop"
                radius="xl"
                visibleFrom="sm"
              >
                Turnos
              </Button>
              <Burger
                opened={menu}
                onClick={menuHandlers.toggle}
                hiddenFrom="md"
                aria-label="Menú"
                color="slate.7"
              />
            </Group>
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={menu}
        onClose={menuHandlers.close}
        position="right"
        title="Secciones"
        padding="md"
        hiddenFrom="md"
        size="min(100%, 20rem)"
      >
        <Stack gap="sm">
          {NAV.map((item) => (
            <Anchor key={item.href} href={item.href} size="md" onClick={menuHandlers.close}>
              {item.label}
            </Anchor>
          ))}
          <Button
            component="a"
            href="#turnos"
            color="violetPop"
            size="md"
            fullWidth
            onClick={menuHandlers.close}
          >
            Turnos
          </Button>
        </Stack>
      </Drawer>

      <style>{`
        .nav-hover {
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }
        .nav-hover:hover {
          border-bottom-color: var(--mantine-color-violetPop-6) !important;
          color: var(--mantine-color-slate-9) !important;
        }
      `}</style>

      <Box id="inicio" py={{ base: 28, sm: 40, md: 56 }} className="tl-hero-section">
        <Container size="lg" px={{ base: "xs", xs: "sm", md: "md" }}>
          <Grid align="center" gap={{ base: "md", md: "xl" }}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <Group gap="xs" wrap="wrap">
                  <Badge
                    color="electric"
                    variant="light"
                    leftSection={<IconCalendarEvent size={12} />}
                  >
                    Modalidad Virtual
                  </Badge>
                  <Badge
                    color="violetPop"
                    variant="filled"
                    leftSection={<IconMapPin size={12} />}
                  >
                    Microcentro, CABA
                  </Badge>
                </Group>
                <Title
                  order={1}
                  c="slate.9"
                  maw={680}
                  w="100%"
                  fz={{ base: rem(40), xs: rem(46), sm: rem(58), md: rem(72) }}
                  lh={{ base: 1.1, sm: 1.08, md: 1.06 }}
                  style={{ textWrap: "balance", overflowWrap: "anywhere" }}
                >
                  Tu historia no es
                  <br />
                  <VioletInTitle>tu destino.</VioletInTitle>
                </Title>
                <Text c="slate.6" lh={1.8} maw={610} style={{ overflowWrap: "anywhere" }}>
                  Es el punto de partida para ser quien hoy decidas ser. Te ofrezco
                  un espacio de escucha donde vas a desarrollar tus potenciales personales
                  y mejorar tu bienestar emocional.
                </Text>
                <Stack gap="md" w="100%" hiddenFrom="sm">
                  <Button
                    component="a"
                    href="#turnos"
                    color="violetPop"
                    size="lg"
                    radius="xl"
                    fullWidth
                  >
                    Agendar sesión inicial
                  </Button>
                  <Button
                    component="a"
                    href="#consultora"
                    variant="default"
                    size="lg"
                    radius="xl"
                    fullWidth
                  >
                    Ver enfoque
                  </Button>
                </Stack>
                <Group gap="md" wrap="wrap" visibleFrom="sm">
                  <Button
                    component="a"
                    href="#turnos"
                    color="violetPop"
                    size="lg"
                    radius="xl"
                  >
                    Agendar sesión inicial
                  </Button>
                  <Button
                    component="a"
                    href="#consultora"
                    variant="default"
                    size="lg"
                    radius="xl"
                  >
                    Ver enfoque
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper
                p={{ base: "lg", sm: "xl" }}
                radius="xl"
                withBorder
                className="hero-profile-card tl-hero-card"
                mt={{ base: "xs", md: 0 }}
              >
                <Box className="hero-profile-avatar">
                  <Image
                    src="/icono-lorena.jpg"
                    alt="Lorena Thompson, consultora psicológica"
                    fill
                    sizes="80px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Stack gap={4} mt="xl" ta="center">
                  <Text fw={700} size="lg" c="slate.8">
                    Clr. Thompson Lorena
                  </Text>
                  <Text size="xs" tt="uppercase" c="slate.5" fw={600}>
                    Consultora Psicológica
                  </Text>
                </Stack>
                <Paper mt="md" p="sm" radius="md" className="soft-frame-inner">
                  <Text size="sm" c="slate.6" ta="center">
                    “El día es HOY y el momento ahora. <br></br>Empezamos cuando vos este lista.”
                  </Text>
                </Paper>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box py={{ base: 36, sm: 42, md: 54 }} bg="violetPop.8" className="tl-band-cta">
        <Container size="md" px={{ base: "xs", sm: "md" }}>
          <Stack align="center" gap="sm">
            <Badge
              color="violetPop"
              variant="light"
              leftSection={<IconSparkles size={12} />}
            >
              El poder está en vos
            </Badge>
            <Title
              order={3}
              c="white"
              ta="center"
              fz={{ base: rem(22), xs: rem(24), sm: rem(27), md: rem(29) }}
              lh={{ base: 1.25, md: 1.14 }}
              px={{ base: "xs", sm: 0 }}
              style={{ textWrap: "balance", overflowWrap: "anywhere" }}
            >
              ¿Te animás a empezar este camino de{" "}
              <VioletInTitle on="light">reencuentro</VioletInTitle>?
            </Title>
            <Text c="violetPop.1" ta="center" px={{ base: "xs", sm: 0 }} style={{ overflowWrap: "anywhere" }}>
              Tu historia es el comienzo de lo que sigue. Tu voz está lista.
            </Text>
            <Box w="100%" maw={rem(320)} mx="auto" mt="xs">
              <Button
                component="a"
                href="#turnos"
                color="white"
                c="violetPop.8"
                size="lg"
                radius="xl"
                fullWidth
              >
                Coordinar primera sesión
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <SectionShell id="consultora">
        <Grid gap={{ base: "lg", md: "xl" }} align="center">
          <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 2, md: 1 }}>
            <Paper
              p={{ base: "md", sm: "lg" }}
              radius="xl"
              withBorder
              className="soft-frame tl-video-card"
            >
              <Box className="video-placeholder">
                <Button
                  variant="white"
                  color="violetPop"
                  size="md"
                  radius="xl"
                  leftSection={<IconPlayerPlayFilled size={16} />}
                  miw={0}
                  style={{ maxWidth: "min(100%, 18rem)" }}
                >
                  Ver presentación
                </Button>
              </Box>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 1, md: 2 }}>
            <Badge
              color="violetPop"
              variant="light"
              mb="sm"
              leftSection={<IconHeartHandshake size={12} />}
            >
              La consultora
            </Badge>
            <Title
              order={2}
              c="slate.9"
              mb="sm"
              fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
              lh={{ base: 1.12, md: 1.06 }}
              style={{ textWrap: "balance", overflowWrap: "anywhere" }}
            >
              Acompañamiento profesional desde el{" "}
              <VioletInTitle>
                <span style={{ fontSize: "0.84em" }}>COUNSELING.</span>
              </VioletInTitle>
            </Title>
            <Text c="slate.6" lh={1.75} style={{ overflowWrap: "anywhere" }}>
              Soy Lorena Thompson, consultora psicológica. Este espacio está pensado
              para acompañarte de forma clara, humana y concreta en tus procesos de
              cambio, vínculos y bienestar emocional.
            </Text>
            <Grid mt="md" gap="sm">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="md" radius="md" withBorder className="soft-frame">
                  <Group gap={6} mb={4}>
                    <IconMessageCircleHeart
                      size={15}
                      color="var(--mantine-color-violetPop-6)"
                    />
                    <Text fw={700} c="slate.8">
                      Escucha activa
                    </Text>
                  </Group>
                  <Text size="sm" c="slate.6">
                    Un espacio profesional para vos.
                  </Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="md" radius="md" withBorder className="soft-frame">
                  <Group gap={6} mb={4}>
                    <IconSparkles
                      size={15}
                      color="var(--mantine-color-violetPop-6)"
                    />
                    <Text fw={700} c="slate.8">
                      Transformación
                    </Text>
                  </Group>
                  <Text size="sm" c="slate.6">
                    A tu ritmo y con objetivos claros.
                  </Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </SectionShell>

      <SectionShell id="proceso">
        <Stack gap="xs" align="center" mb="xl" className="tl-section-head" px={{ base: "xs", sm: 0 }}>
          <Title
            order={2}
            c="slate.9"
            ta="center"
            fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
            lh={{ base: 1.12, md: 1.06 }}
            style={{ textWrap: "balance", overflowWrap: "anywhere" }}
          >
            Tu <VioletInTitle>proceso</VioletInTitle>, tu{" "}
            <VioletInTitle>ritmo</VioletInTitle>
          </Title>
          <Text c="slate.6" ta="center" style={{ overflowWrap: "anywhere" }}>
            Un acompañamiento de escucha, empático y sin juicios.
          </Text>
        </Stack>
        <Box className="proceso-pasos-wrap" pos="relative">
          <Box className="proceso-pasos-connector proceso-pasos-connector--a" aria-hidden />
          <Box className="proceso-pasos-connector proceso-pasos-connector--b" aria-hidden />
          <Box className="proceso-pasos-connector proceso-pasos-connector--c" aria-hidden />
          <Grid gap="md" className="proceso-pasos-grid">
          {PASOS.map((paso) => (
            <Grid.Col
              key={paso.n}
              span={{ base: 12, sm: 6, md: 3 }}
              className="proceso-paso-col"
            >
              <Stack align="center" gap={8} pos="relative" style={{ zIndex: 1 }}>
                {paso.n === "4" ? (
                  <Box
                    w={52}
                    h={52}
                    style={{
                      borderRadius: 999,
                      background:
                        "linear-gradient(145deg, var(--mantine-color-violetPop-5), var(--mantine-color-violetPop-7))",
                      border: "1px solid rgba(255, 255, 255, 0.28)",
                      display: "grid",
                      placeItems: "center",
                      position: "relative",
                      zIndex: 2,
                      boxShadow:
                        "0 8px 22px rgba(103, 79, 163, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 0 0 4px rgba(247, 249, 255, 0.96)",
                    }}
                  >
                    <IconLeaf size={22} color="#fff" stroke={1.5} />
                  </Box>
                ) : (
                  <Box
                    w={52}
                    h={52}
                    style={{
                      borderRadius: 999,
                      border: "2px solid var(--mantine-color-violetPop-4)",
                      backgroundColor: "#f4f7fd",
                      display: "grid",
                      placeItems: "center",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: "0 0 0 3px rgba(247, 249, 255, 0.95)",
                    }}
                  >
                    <Text
                      component="span"
                      fz={20}
                      fw={700}
                      lh={1}
                      c="violetPop.8"
                      style={{
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontVariantNumeric: "tabular-nums",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {paso.n}
                    </Text>
                  </Box>
                )}
                <Text fw={700} c="slate.8">
                  {paso.title}
                </Text>
                <Text size="sm" c="slate.6" ta="center">
                  {paso.text}
                </Text>
              </Stack>
            </Grid.Col>
          ))}
          </Grid>
        </Box>
      </SectionShell>

      <SectionShell id="acompanamiento">
        <Stack
          align="center"
          gap="xs"
          mb="xl"
          className="tl-section-head"
          px={{ base: "xs", sm: 0 }}
        >
          <Title
            order={2}
            c="slate.9"
            ta="center"
            fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
            lh={{ base: 1.12, md: 1.06 }}
            style={{ textWrap: "balance", overflowWrap: "anywhere" }}
          >
            Áreas de <VioletInTitle>Acompañamiento</VioletInTitle>
          </Title>
          <Text c="slate.6" ta="center" maw={700} style={{ overflowWrap: "anywhere" }}>
            Un proceso centrado en el desarrollo personal, enfocado en el presente
            y orientado a la acción y bienestar.
          </Text>
        </Stack>
        <Grid gap={{ base: "md", md: "lg" }}>
          {AREAS.map((item) => (
            <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
              <Paper
                p={{ base: "md", sm: "lg" }}
                radius="xl"
                withBorder
                className="soft-frame area-acomp-card"
              >
                <Group gap="sm" mb="xs" wrap="nowrap" align="flex-start">
                  <Box className="area-acomp-card__icon" aria-hidden="true">
                    <IconUsersGroup
                      size={17}
                      color="var(--mantine-color-violetPop-6)"
                      stroke={1.65}
                    />
                  </Box>
                  <Text fw={700} c="slate.8" style={{ flex: 1, minWidth: 0 }}>
                    {item.title}
                  </Text>
                </Group>
                <Text c="slate.6" lh={1.7}>
                  {item.body}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </SectionShell>

      <SectionShell id="testimonios">
        <Stack align="center" gap="xs" mb="xl" className="tl-section-head" px={{ base: "xs", sm: 0 }}>
          <Title
            order={2}
            c="slate.9"
            ta="center"
            fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
            lh={{ base: 1.12, md: 1.06 }}
            style={{ textWrap: "balance", overflowWrap: "anywhere" }}
          >
            <VioletInTitle>Testimonios</VioletInTitle> de Consultantes
          </Title>
          <Text c="slate.6" ta="center" style={{ overflowWrap: "anywhere" }}>
            Transformaciones impulsadas por un espacio de escucha activa y empática.
          </Text>
        </Stack>
        <Grid gap={{ base: "md", md: "lg" }}>
          {TESTIMONIOS.map((item) => (
            <Grid.Col key={item.meta} span={{ base: 12, md: 4 }}>
              <Paper
                p={{ base: "md", sm: "lg" }}
                radius="xl"
                withBorder
                className="soft-frame tl-quote-card"
              >
                <Group gap={4} mb="sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled
                      key={`${item.meta}-star-${i}`}
                      size={14}
                      color="#FACC15"
                    />
                  ))}
                </Group>
                <Text size="sm" c="slate.7" lh={1.75} style={{ overflowWrap: "anywhere" }}>
                  {item.quote}
                </Text>
                <Text size="xs" c="slate.5" mt="md" fw={600}>
                  {item.meta}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </SectionShell>

      <SectionShell id="faq">
        <Stack align="center" gap="xs" mb="xl" className="tl-section-head" px={{ base: "xs", sm: 0 }}>
          <Title
            order={2}
            c="slate.9"
            ta="center"
            fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
            lh={{ base: 1.12, md: 1.06 }}
            style={{ textWrap: "balance", overflowWrap: "anywhere" }}
          >
            Preguntas <VioletInTitle>Frecuentes</VioletInTitle>
          </Title>
        </Stack>
        <Container size="sm" px={0} w="100%">
          <Accordion
            variant="separated"
            radius="md"
            chevronPosition="right"
            classNames={{
              item: "tl-faq-item",
              control: "tl-faq-control",
              chevron: "tl-faq-chevron",
              panel: "tl-faq-panel",
            }}
          >
            {FAQ_ITEMS.map((item) => (
              <Accordion.Item key={item.q} value={item.q}>
                <Accordion.Control>
                  <Text fw={600} c="slate.8" pr="xs" style={{ overflowWrap: "anywhere" }}>
                    {item.q}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text c="slate.6" style={{ overflowWrap: "anywhere" }}>
                    {item.a}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </SectionShell>

      <Box py={{ base: 48, sm: 56, md: 72 }} className="tl-mid-cta">
        <Container size="sm" px={{ base: "xs", sm: "md" }}>
          <Stack align="center" gap="xs">
            <Title
              order={2}
              c="slate.9"
              ta="center"
              fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
              lh={{ base: 1.12, md: 1.06 }}
              style={{ textWrap: "balance", overflowWrap: "anywhere" }}
            >
              El momento es <VioletInTitle>ahora</VioletInTitle>
            </Title>
            <Text c="slate.6" ta="center" style={{ overflowWrap: "anywhere" }}>
              Empezamos a diseñar tu futuro cuando vos estés lista.
            </Text>
            <Box w="100%" maw={rem(320)} mx="auto" mt="sm">
              <Button
                component="a"
                href="#turnos"
                color="violetPop"
                size="lg"
                radius="xl"
                fullWidth
              >
                Coordinar primera sesión
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <SectionShell id="turnos">
        <Grid gap={{ base: "lg", md: "xl" }} align="start" justify="center">
          <Grid.Col span={{ base: 12, md: 8, lg: 7 }}>
            <Title
              order={2}
              c="slate.9"
              mb="sm"
              fz={{ base: rem(30), xs: rem(34), sm: rem(38), md: rem(40) }}
              lh={{ base: 1.12, md: 1.06 }}
              style={{ textWrap: "balance", overflowWrap: "anywhere" }}
            >
              <VioletInTitle>Contacto</VioletInTitle> y{" "}
              <VioletInTitle>Ubicación</VioletInTitle>
            </Title>
            <Text c="slate.6" mb="lg" style={{ overflowWrap: "anywhere" }}>
              Escribime para coordinar tu primera sesión. Podés contactarme por
              WhatsApp, correo o redes sociales.
            </Text>
            {CONTACTO_FILAS.map((row) => (
              <Paper
                key={row.id}
                p={{ base: "sm", sm: "md" }}
                radius="md"
                withBorder
                className="soft-frame"
                mb="sm"
              >
                <Group gap="sm" wrap="nowrap" align="flex-start" justify="flex-start">
                  <Box className="area-acomp-card__icon" aria-hidden="true">
                    {row.icon === "calendar" && (
                      <IconCalendarEvent
                        size={17}
                        color="var(--mantine-color-violetPop-6)"
                        stroke={1.65}
                      />
                    )}
                    {row.icon === "whatsapp" && (
                      <IconBrandWhatsapp
                        size={17}
                        color="var(--mantine-color-violetPop-6)"
                        stroke={1.65}
                      />
                    )}
                    {row.icon === "instagram" && (
                      <IconBrandInstagram
                        size={17}
                        color="var(--mantine-color-violetPop-6)"
                        stroke={1.65}
                      />
                    )}
                  </Box>
                  {"href" in row && row.href ? (
                    <Anchor
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      fw={400}
                      c="slate.8"
                      underline="hover"
                      style={{ flex: 1, minWidth: 0 }}
                    >
                      {row.texto}
                    </Anchor>
                  ) : (
                    <Text fw={400} c="slate.8" style={{ flex: 1, minWidth: 0 }}>
                      {row.texto}
                    </Text>
                  )}
                </Group>
              </Paper>
            ))}
          </Grid.Col>
        </Grid>
      </SectionShell>

      <Box py={{ base: "lg", sm: "xl" }} bg="#1d1a2b" className="tl-footer-site">
        <Container size="lg" px={{ base: "xs", sm: "md" }}>
          <Stack gap={2}>
            <Text fw={700} c="white">
              Clr. Thompson Lorena
            </Text>
            <Text size="sm" c="violetPop.2">
              Consultora Psicológica · Desarrollo personal y bienestar
            </Text>
          </Stack>
        </Container>
      </Box>

      <Button
        component="a"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir WhatsApp, número ${WHATSAPP_ARIA_PHONE}`}
        className="wa-floating-btn"
        leftSection={<IconBrandWhatsapp size={20} stroke={1.5} />}
        size="md"
        radius="xl"
        styles={{
          root: {
            position: "fixed",
            bottom: "max(16px, env(safe-area-inset-bottom, 0px) + 12px)",
            right: "max(16px, env(safe-area-inset-right, 0px) + 12px)",
            zIndex: 200,
            backgroundColor: "#25D366",
            color: "#fff",
            paddingInline: 18,
            minHeight: 44,
            fontWeight: 600,
            border: "1px solid rgba(255, 255, 255, 0.22)",
            transition: "transform 0.25s cubic-bezier(0.33, 1.3, 0.64, 1), filter 0.2s ease",
            "&:hover": {
              backgroundColor: "#20BD5C",
              color: "#fff",
              filter: "brightness(1.05)",
              transform: "translateY(-3px) scale(1.02)",
            },
            "&:active": { transform: "translateY(-1px) scale(0.98)" },
          },
        }}
      >
        {WHATSAPP_FAB_TEXT}
      </Button>
    </Box>
  );
}
