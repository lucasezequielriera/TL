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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandWhatsapp, IconPlayerPlayFilled } from "@tabler/icons-react";

const WHATSAPP_URL = "https://wa.me/5491123663477";
const WHATSAPP_LABEL = "11 2366-3477";

const NAV = [
  { label: "La Consultora", href: "#consultora" },
  { label: "Acompañamiento", href: "#acompanamiento" },
  { label: "El Proceso", href: "#proceso" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "FAQ", href: "#faq" },
  { label: "Turnos", href: "#turnos" },
];

const PASOS = [
  { n: "1", title: "Contacto", text: "Revisión inicial por WhatsApp." },
  { n: "2", title: "Encuentro", text: "Primera sesión de escucha activa." },
  { n: "3", title: "Proceso", text: "Trabajo terapéutico con foco concreto." },
  { n: "4", title: "Transformación", text: "Seguimiento y evolución sostenida." },
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
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: "inherit",
        lineHeight: "inherit",
        fontFamily: "inherit",
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
    <Box component="section" id={id} py={{ base: 56, md: 80 }}>
      <Container size="lg">{children}</Container>
    </Box>
  );
}

export default function Home() {
  const [menu, menuHandlers] = useDisclosure(false);

  return (
    <Box component="main" mih="100vh" className="site-shell">
      <Box className="site-bg" aria-hidden="true">
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
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Container fluid px={{ base: "md", md: "xl" }} py="md">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Anchor href="#inicio" underline="never" c="slate.9">
              <Group gap="sm" wrap="nowrap">
                <Image
                  src="/logo.jpeg"
                  alt="Thompson Lorena"
                  width={142}
                  height={40}
                  style={{ height: 40, width: "auto", borderRadius: 8 }}
                  priority
                />
                <Box visibleFrom="sm">
                  <Text
                    fw={700}
                    size="md"
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

            <Group gap="md" wrap="nowrap" justify="flex-end" style={{ marginLeft: "auto" }}>
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
                size="sm"
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
      >
        <Stack gap="sm">
          {NAV.map((item) => (
            <Anchor key={item.href} href={item.href} size="md" onClick={menuHandlers.close}>
              {item.label}
            </Anchor>
          ))}
          <Button component="a" href="#turnos" color="violetPop" onClick={menuHandlers.close}>
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

      <Box id="inicio" py={{ base: 40, md: 56 }}>
        <Container size="lg">
          <Grid align="center" gap="xl">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <Group gap="xs">
                  <Badge color="electric" variant="light">
                    Modalidad virtual
                  </Badge>
                  <Badge color="violetPop" variant="filled">
                    Microcentro, CABA
                  </Badge>
                </Group>
                <Title order={1} c="slate.9" maw={620}>
                  Tu historia no es <VioletInTitle>tu destino.</VioletInTitle>
                </Title>
                <Text c="slate.6" lh={1.8} maw={610}>
                  Es el punto de partida para ser quien hoy decidís ser. Te ofrezco
                  un espacio de escucha para desarrollar tus potenciales personales
                  y mejorar tu bienestar emocional.
                </Text>
                <Group gap="sm">
                  <Button color="violetPop" radius="xl">
                    Agendar sesión inicial
                  </Button>
                  <Button variant="default" radius="xl">
                    Ver enfoque
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper p="xl" radius="xl" withBorder className="hero-profile-card">
                <Box className="hero-profile-avatar" />
                <Stack gap={4} mt="xl" ta="center">
                  <Text fw={700} size="lg" c="slate.8">
                    Clr. Thompson Lorena
                  </Text>
                  <Text size="xs" tt="uppercase" c="slate.5" fw={600}>
                    Consultora Psicológica
                  </Text>
                </Stack>
                <Paper mt="md" p="sm" radius="md" bg="violetPop.0">
                  <Text size="sm" c="slate.6" ta="center">
                    “El día es hoy y el mundo ahora. Empezamos cuando vos lo
                    decidís.”
                  </Text>
                </Paper>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box py={{ base: 42, md: 54 }} bg="violetPop.8">
        <Container size="md">
          <Stack align="center" gap="sm">
            <Badge color="violetPop" variant="light">
              El poder está en vos
            </Badge>
            <Title order={3} c="white" ta="center">
              ¿Te animás a empezar este camino de{" "}
              <VioletInTitle on="light">reencuentro</VioletInTitle>?
            </Title>
            <Text c="violetPop.1" ta="center">
              Tu historia es el comienzo de lo que sigue. Tu voz está lista.
            </Text>
            <Button color="white" c="violetPop.8" radius="xl" mt="xs">
              Coordinar primera sesión
            </Button>
          </Stack>
        </Container>
      </Box>

      <SectionShell id="consultora">
        <Grid gap="xl" align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper p="lg" radius="xl" withBorder className="soft-frame">
              <Box className="video-placeholder">
                <Button variant="white" color="violetPop" radius="xl" leftSection={<IconPlayerPlayFilled size={14} />}>
                  Ver presentación
                </Button>
              </Box>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Badge color="violetPop" variant="light" mb="sm">
              La consultora
            </Badge>
            <Title order={2} c="slate.9" mb="sm">
              Acompañamiento profesional desde el{" "}
              <VioletInTitle>counseling.</VioletInTitle>
            </Title>
            <Text c="slate.6" lh={1.75}>
              Soy Lorena Thompson, consultora psicológica. Este espacio está pensado
              para acompañarte de forma clara, humana y concreta en tus procesos de
              cambio, vínculos y bienestar emocional.
            </Text>
            <Grid mt="md" gap="sm">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="md" radius="md" withBorder className="soft-frame">
                  <Text fw={700} c="slate.8">
                    Escucha activa
                  </Text>
                  <Text size="sm" c="slate.6">
                    Un espacio profesional para vos.
                  </Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper p="md" radius="md" withBorder className="soft-frame">
                  <Text fw={700} c="slate.8">
                    Transformación
                  </Text>
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
        <Stack gap="xs" align="center" mb="xl">
          <Title order={2} c="slate.9" ta="center">
            Tu <VioletInTitle>proceso</VioletInTitle>, tu{" "}
            <VioletInTitle>ritmo</VioletInTitle>
          </Title>
          <Text c="slate.6" ta="center">
            Un acompañamiento empático y respetuoso de tus tiempos.
          </Text>
        </Stack>
        <Grid gap="md">
          {PASOS.map((paso) => (
            <Grid.Col key={paso.n} span={{ base: 12, sm: 6, md: 3 }}>
              <Stack align="center" gap={8}>
                <Box
                  w={52}
                  h={52}
                  style={{
                    borderRadius: 999,
                    border: "2px solid var(--mantine-color-violetPop-4)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--mantine-color-slate-8)",
                    fontWeight: 700,
                  }}
                >
                  {paso.n}
                </Box>
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
      </SectionShell>

      <SectionShell id="acompanamiento">
        <Stack align="center" gap="xs" mb="xl">
          <Title order={2} c="slate.9" ta="center">
            Áreas de <VioletInTitle>Acompañamiento</VioletInTitle>
          </Title>
          <Text c="slate.6" ta="center" maw={700}>
            Un proceso centrado en el desarrollo personal, enfocado en el presente
            y orientado a la acción y bienestar.
          </Text>
        </Stack>
        <Grid gap="lg">
          {AREAS.map((item) => (
            <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
              <Paper p="lg" radius="xl" withBorder className="soft-frame">
                <Text fw={700} c="slate.8" mb="xs">
                  {item.title}
                </Text>
                <Text c="slate.6" lh={1.7}>
                  {item.body}
                </Text>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </SectionShell>

      <SectionShell id="experiencias">
        <Stack align="center" gap="xs" mb="xl">
          <Title order={2} c="slate.9" ta="center">
            <VioletInTitle>Experiencias</VioletInTitle> de Consultantes
          </Title>
          <Text c="slate.6" ta="center">
            Transformaciones impulsadas por un espacio de escucha activa y empática.
          </Text>
        </Stack>
        <Grid gap="lg">
          {TESTIMONIOS.map((item) => (
            <Grid.Col key={item.meta} span={{ base: 12, md: 4 }}>
              <Paper p="lg" radius="xl" withBorder className="soft-frame">
                <Text c="violetPop.6" fw={700} mb="sm">
                  ★★★★★
                </Text>
                <Text size="sm" c="slate.7" lh={1.75}>
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
        <Stack align="center" gap="xs" mb="xl">
          <Title order={2} c="slate.9" ta="center">
            Preguntas <VioletInTitle>Frecuentes</VioletInTitle>
          </Title>
        </Stack>
        <Container size="sm" px={0}>
          <Accordion variant="separated" radius="md" chevronPosition="right">
            {FAQ_ITEMS.map((item) => (
              <Accordion.Item key={item.q} value={item.q}>
                <Accordion.Control>
                  <Text fw={600} c="slate.8">
                    {item.q}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text c="slate.6">{item.a}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </SectionShell>

      <Box py={{ base: 56, md: 72 }}>
        <Container size="sm">
          <Stack align="center" gap="xs">
            <Title order={2} c="slate.9" ta="center">
              El momento es <VioletInTitle>ahora</VioletInTitle>
            </Title>
            <Text c="slate.6" ta="center">
              Empezamos a diseñar tu futuro cuando vos estés lista.
            </Text>
            <Button color="violetPop" radius="xl" mt="sm">
              Coordinar primera sesión
            </Button>
          </Stack>
        </Container>
      </Box>

      <SectionShell id="turnos">
        <Grid gap="xl" align="start">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title order={2} c="slate.9" mb="sm">
              <VioletInTitle>Contacto</VioletInTitle> y{" "}
              <VioletInTitle>Ubicación</VioletInTitle>
            </Title>
            <Text c="slate.6" mb="lg">
              Escribime para coordinar tu primera sesión. Podés contactarme por
              WhatsApp, correo o redes sociales.
            </Text>
            {[
              "Modalidad de atención: virtual y presencial",
              "Contacto directo: +54 9 11 2366-3477",
              "Redes: @ticonsultorapsicologica",
            ].map((line) => (
              <Paper key={line} p="md" radius="md" withBorder className="soft-frame" mb="sm">
                <Text c="slate.7">{line}</Text>
              </Paper>
            ))}
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper p="lg" radius="xl" withBorder className="soft-frame">
              <Group justify="space-between" mb="sm">
                <Text fw={700} c="slate.8">
                  Agenda tu sesión online
                </Text>
                <Badge color="violetPop" variant="filled">
                  Disponible
                </Badge>
              </Group>
              <Box
                h={360}
                style={{
                  borderRadius: 16,
                  border: "1px solid var(--mantine-color-slate-2)",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.95), rgba(243,238,255,0.55))",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Text c="slate.5">Mockup de agenda / Calendly</Text>
              </Box>
            </Paper>
          </Grid.Col>
        </Grid>
      </SectionShell>

      <Box py="xl" bg="#1d1a2b">
        <Container size="lg">
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
        aria-label={`Abrir WhatsApp ${WHATSAPP_LABEL}`}
        leftSection={<IconBrandWhatsapp size={22} stroke={1.5} />}
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
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.22)",
            paddingInline: 18,
            "&:hover": { backgroundColor: "#20BD5C", color: "#fff" },
          },
        }}
      >
        {WHATSAPP_LABEL}
      </Button>
    </Box>
  );
}
