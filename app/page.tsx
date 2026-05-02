"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Burger,
  Button,
  Card,
  Container,
  Drawer,
  Grid,
  Group,
  Overlay,
  Paper,
  SegmentedControl,
  Stack,
  TextInput,
  Textarea,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

const NAV = [
  { label: "La consultora", href: "#consultora" },
  { label: "Acompañamiento", href: "#acompanamiento" },
  { label: "El proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Turnos", href: "#turnos" },
];

const MODOS = [
  {
    id: "ansiedad",
    label: "Ansiedad",
    title: "Ordenar el ruido mental",
    body: "Cuando todo se acelera, trabajamos respiración, pensamiento y rutinas para recuperar claridad y energía.",
  },
  {
    id: "vinculos",
    label: "Vínculos",
    title: "Vincularte con menos desgaste",
    body: "Aprender a poner límites y comunicar necesidades sin culpa, con herramientas concretas para situaciones reales.",
  },
  {
    id: "cambios",
    label: "Cambios vitales",
    title: "Sostener transiciones importantes",
    body: "Mudanzas, duelos, separaciones y decisiones complejas: un proceso acompañado para atravesar cada etapa con contención.",
  },
];

const PASOS = [
  {
    n: "01",
    title: "Diagnóstico inicial",
    text: "Nos encontramos para entender tu situación actual y definir prioridades concretas.",
  },
  {
    n: "02",
    title: "Plan personalizado",
    text: "Diseñamos objetivos semanales y un enfoque adaptado a tus tiempos y tu contexto.",
  },
  {
    n: "03",
    title: "Seguimiento dinámico",
    text: "Medimos avances, ajustamos estrategias y sostenemos el proceso en el mediano plazo.",
  },
];

const TESTIMONIOS = [
  {
    quote:
      "“En pocas semanas pasé de sentirme desbordada a tener herramientas concretas para el día a día.”",
    meta: "Marina · 31 años",
  },
  {
    quote:
      "“Me gustó la claridad del proceso: sabía qué estábamos trabajando y para qué.”",
    meta: "Carla · 28 años",
  },
  {
    quote: "“Aprendí a poner límites sin culpa y volver a confiar en mis decisiones.”",
    meta: "Lucía · 35 años",
  },
];

const FAQ_ITEMS = [
  {
    category: "modalidad",
    q: "¿Las sesiones son online o presenciales?",
    a: "Podés elegir la modalidad que te resulte más cómoda y sostenible en el tiempo.",
  },
  {
    category: "sesiones",
    q: "¿Cuánto dura una sesión?",
    a: "Aproximadamente 50 minutos.",
  },
  {
    category: "frecuencia",
    q: "¿Con qué frecuencia se recomienda?",
    a: "Se acuerda en conjunto. Suele ser semanal al inicio y luego se ajusta según tu evolución.",
  },
];

const CONTACTO = [
  { id: "email", label: "Email", hint: "Respuesta dentro de 24 hs hábiles." },
  { id: "whatsapp", label: "WhatsApp", hint: "Ideal para coordinar horarios." },
  { id: "llamada", label: "Llamada", hint: "Podés pedir contacto telefónico." },
];

function SectionShell({
  id,
  children,
  bg,
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <Box
      component="section"
      id={id}
      py={{ base: 56, md: 80 }}
      style={{ backgroundColor: bg ?? "transparent" }}
    >
      <Container size="sm">{children}</Container>
    </Box>
  );
}

export default function Home() {
  const [modo, setModo] = useState(MODOS[0].id);
  const [tIdx, setTIdx] = useState(0);
  const [pasoActivo, setPasoActivo] = useState(PASOS[0].n);
  const [canal, setCanal] = useState(CONTACTO[1].id);
  const [faqFilter, setFaqFilter] = useState("todos");
  const [menu, menuHandlers] = useDisclosure(false);

  const modoActual = MODOS.find((m) => m.id === modo) ?? MODOS[0];
  const canalActual = CONTACTO.find((c) => c.id === canal) ?? CONTACTO[0];
  const pasoSeleccionado = PASOS.find((p) => p.n === pasoActivo) ?? PASOS[0];
  const faqVisibles =
    faqFilter === "todos"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === faqFilter);

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
          borderBottom: "1px solid rgba(15, 23, 42, 0.10)",
          backgroundColor: "rgba(248, 250, 252, 0.8)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Container fluid px={{ base: "md", md: "xl" }} py="md">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Anchor href="#inicio" underline="never" c="slate.9">
              <Group gap="sm" wrap="nowrap">
                <Image
                  src="/logo.jpeg"
                  alt="Thompson Lorena"
                  width={136}
                  height={40}
                  style={{ height: 40, width: "auto", borderRadius: 8 }}
                  priority
                />
                <Box visibleFrom="sm">
                  <Text
                    fw={600}
                    size="md"
                    c="slate.9"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Thompson Lorena
                  </Text>
                  <Text size="xs" c="slate.6" tt="uppercase" lts={1.6}>
                    Consultora psicológica
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
                    fw={500}
                    underline="never"
                    className="nav-hover"
                    style={{
                      borderBottom: "2px solid transparent",
                      paddingBottom: 2,
                    }}
                  >
                    {item.label}
                  </Anchor>
                ))}
              </Group>

              <Group gap="xs" wrap="nowrap">
                <Button
                  component="a"
                  href="#turnos"
                  variant="gradient"
                  gradient={{ from: "electric.6", to: "violetPop.6", deg: 120 }}
                  visibleFrom="sm"
                >
                  Pedir turno
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
            <Anchor
              key={item.href}
              href={item.href}
              size="md"
              onClick={menuHandlers.close}
            >
              {item.label}
            </Anchor>
          ))}
          <Button
            component="a"
            href="#turnos"
            variant="gradient"
            gradient={{ from: "electric.6", to: "violetPop.6", deg: 120 }}
            onClick={menuHandlers.close}
            fullWidth
            mt="md"
          >
            Pedir turno
          </Button>
        </Stack>
      </Drawer>

      <style>{`
        .nav-hover:hover {
          border-bottom-color: var(--mantine-color-electric-6) !important;
          color: var(--mantine-color-slate-9) !important;
        }
      `}</style>

      <Box id="inicio" py={{ base: 40, md: 56 }}>
        <Container size="lg" w="100%">
          <Grid gap="xl" align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="xl">
                <Group gap="xs">
                  <Badge variant="light" color="electric" size="lg">
                    Atención clínica contemporánea
                  </Badge>
                  <Badge variant="light" color="violetPop" size="lg">
                    Estilo personalizado
                  </Badge>
                  <Badge variant="light" color="electric" size="lg">
                    Claridad + contención
                  </Badge>
                </Group>
                <Title order={1} c="slate.9" maw={680}>
                  Terapia clara, actual y personalizada para tu momento.
                </Title>
                <Text size="lg" c="slate.6" lh={1.7} maw={620}>
                  Un enfoque moderno que combina escucha clínica, herramientas
                  prácticas y seguimiento real para que cada sesión tenga
                  dirección y resultados.
                </Text>
                <Group gap="md">
                  <Button
                    component="a"
                    href="#turnos"
                    size="md"
                    variant="gradient"
                    gradient={{ from: "electric.6", to: "violetPop.6", deg: 120 }}
                  >
                    Agendar primera consulta
                  </Button>
                  <Button component="a" href="#proceso" variant="default" size="md">
                    Ver el proceso
                  </Button>
                </Group>
                <SimpleKpis />
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper
                p="xl"
                radius="xl"
                withBorder={false}
                shadow="none"
                className="glass-panel glass-panel--hover"
              >
                <Group justify="space-between" mb="lg">
                  <Text fw={600} c="slate.8">
                    Qué podés esperar
                  </Text>
                  <Badge color="electric" variant="light">
                    Modalidad híbrida
                  </Badge>
                </Group>
                <Stack gap="sm">
                  {[
                    "Sesiones de 50 minutos con foco concreto",
                    "Objetivos claros y seguimiento continuo",
                    "Herramientas aplicables entre sesiones",
                  ].map((label) => (
                    <Group key={label} justify="space-between">
                      <Text size="sm" c="slate.7">
                        {label}
                      </Text>
                      <IconCheck size={16} color="var(--mantine-color-electric-6)" />
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <SectionShell id="consultora">
        <Grid gap="xl">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              <Badge color="electric" variant="light" size="lg" w="fit-content">
                La consultora
              </Badge>
              <Title order={2} c="slate.9">
                Thompson Lorena
              </Title>
              <Text size="md" c="slate.6" lh={1.8}>
                Psicóloga especializada en acompañamiento de adultos y jóvenes.
                Integra herramientas clínicas y recursos de regulación emocional
                para trabajar ansiedad, vínculos y procesos de cambio con
                objetivos claros.
              </Text>
              <Paper
                p="lg"
                withBorder={false}
                shadow="none"
                radius="lg"
                className="glass-panel glass-panel--hover"
              >
                <Text fw={600} c="slate.8" mb="xs">
                  Enfoque
                </Text>
                <Text c="slate.6" lh={1.7}>
                  Escucha profesional + estrategia práctica + revisión continua.
                </Text>
              </Paper>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper
              p={0}
              withBorder={false}
              shadow="none"
              radius="lg"
              className="glass-panel"
              style={{ overflow: "hidden" }}
            >
              <Box
                h={42}
                px="md"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.65)",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.55), rgba(245,248,255,0.4))",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Group h="100%" justify="space-between">
                  <Text size="xs" c="slate.6">
                    Presentación de la consultora
                  </Text>
                  <ActionIcon variant="light" color="electric">
                    <IconPlayerPlayFilled size={14} />
                  </ActionIcon>
                </Group>
              </Box>
              <Box
                pos="relative"
                mih={240}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(145deg, rgba(59,130,246,0.10), rgba(139,92,246,0.12), rgba(34,197,94,0.10))",
                }}
              >
                <Overlay color="#0f172a" backgroundOpacity={0.1} />
                <Text pos="relative" c="slate.8" fw={500}>
                  Espacio para video (YouTube/Vimeo/embed)
                </Text>
              </Box>
            </Paper>
          </Grid.Col>
        </Grid>
      </SectionShell>

      <SectionShell id="acompanamiento">
        <Stack gap="lg">
          <Group justify="space-between" align="end" wrap="wrap">
            <Stack gap={6}>
              <Badge color="violetPop" variant="light" size="lg" w="fit-content">
                Acompañamiento
              </Badge>
              <Title order={2} c="slate.9">
                Elegí un eje para ver cómo se trabaja
              </Title>
            </Stack>
          </Group>

          <SegmentedControl
            value={modo}
            onChange={setModo}
            data={MODOS.map((m) => ({ value: m.id, label: m.label }))}
            color="electric"
            fullWidth
          />

          <Card
            withBorder={false}
            padding="xl"
            radius="lg"
            shadow="none"
            className="glass-panel glass-panel--hover"
          >
            <Title order={3} c="slate.9" mb="sm">
              {modoActual.title}
            </Title>
            <Text c="slate.6" lh={1.8}>
              {modoActual.body}
            </Text>
          </Card>
        </Stack>
      </SectionShell>

      <SectionShell id="proceso">
        <Stack gap="lg">
          <Badge color="neon" variant="light" size="lg" w="fit-content">
            El proceso
          </Badge>
          <Title order={2} c="slate.9">
            Paso a paso, simple y transparente
          </Title>
          <Grid gap="md" align="stretch">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="sm">
                {PASOS.map((p) => {
                  const active = pasoActivo === p.n;
                  return (
                    <Button
                      key={p.n}
                      variant={active ? "gradient" : "light"}
                      gradient={
                        active
                          ? { from: "electric.6", to: "violetPop.6", deg: 120 }
                          : undefined
                      }
                      color={active ? undefined : "slate"}
                      justify="space-between"
                      rightSection={<IconArrowRight size={14} />}
                      onClick={() => setPasoActivo(p.n)}
                    >
                      {p.n} · {p.title}
                    </Button>
                  );
                })}
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Card
                withBorder={false}
                padding="xl"
                radius="lg"
                shadow="none"
                className="glass-panel glass-panel--tint glass-panel--hover"
              >
                <Text fw={700} c="electric.7" mb="xs">
                  Paso {pasoSeleccionado.n}
                </Text>
                <Title order={3} c="slate.9" mb="sm">
                  {pasoSeleccionado.title}
                </Title>
                <Text c="slate.6" lh={1.8}>
                  {pasoSeleccionado.text}
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </SectionShell>

      <SectionShell id="testimonios">
        <Stack gap="lg">
          <Badge color="electric" variant="light" size="lg" w="fit-content">
            Testimonios
          </Badge>
          <Title order={2} c="slate.9">
            Lo que destacan quienes consultan
          </Title>
          <Paper
            p="xl"
            withBorder={false}
            shadow="none"
            radius="xl"
            className="glass-panel glass-panel--hover"
          >
            <Text size="xl" lh={1.6} c="slate.8" fw={500}>
              {TESTIMONIOS[tIdx].quote}
            </Text>
            <Text mt="sm" c="slate.6">
              {TESTIMONIOS[tIdx].meta}
            </Text>
            <Group mt="md" gap={6}>
              {TESTIMONIOS.map((_, idx) => (
                <Box
                  key={idx}
                  h={7}
                  style={{
                    width: idx === tIdx ? 26 : 7,
                    borderRadius: 999,
                    background:
                      idx === tIdx
                        ? "var(--mantine-color-electric-6)"
                        : "var(--mantine-color-slate-3)",
                    transition: "all 180ms ease",
                    cursor: "pointer",
                  }}
                  onClick={() => setTIdx(idx)}
                />
              ))}
            </Group>
            <Group justify="space-between" mt="lg">
              <Button
                variant="subtle"
                color="slate"
                onClick={() =>
                  setTIdx((i) => (i === 0 ? TESTIMONIOS.length - 1 : i - 1))
                }
                leftSection={<IconArrowLeft size={14} />}
              >
                Anterior
              </Button>
              <Button
                variant="subtle"
                color="slate"
                onClick={() =>
                  setTIdx((i) => (i === TESTIMONIOS.length - 1 ? 0 : i + 1))
                }
                rightSection={<IconArrowRight size={14} />}
              >
                Siguiente
              </Button>
            </Group>
          </Paper>
        </Stack>
      </SectionShell>

      <SectionShell id="faq">
        <Stack gap="lg">
          <Badge color="violetPop" variant="light" size="lg" w="fit-content">
            FAQ
          </Badge>
          <Title order={2} c="slate.9">
            Preguntas frecuentes
          </Title>
          <Group gap="xs">
            <Button
              size="xs"
              variant={faqFilter === "todos" ? "filled" : "light"}
              color={faqFilter === "todos" ? "electric" : "slate"}
              onClick={() => setFaqFilter("todos")}
            >
              Todas
            </Button>
            <Button
              size="xs"
              variant={faqFilter === "modalidad" ? "filled" : "light"}
              color={faqFilter === "modalidad" ? "electric" : "slate"}
              onClick={() => setFaqFilter("modalidad")}
            >
              Modalidad
            </Button>
            <Button
              size="xs"
              variant={faqFilter === "sesiones" ? "filled" : "light"}
              color={faqFilter === "sesiones" ? "electric" : "slate"}
              onClick={() => setFaqFilter("sesiones")}
            >
              Sesiones
            </Button>
            <Button
              size="xs"
              variant={faqFilter === "frecuencia" ? "filled" : "light"}
              color={faqFilter === "frecuencia" ? "electric" : "slate"}
              onClick={() => setFaqFilter("frecuencia")}
            >
              Frecuencia
            </Button>
          </Group>
          <Accordion
            variant="separated"
            chevronPosition="right"
            classNames={{ item: "glass-accordion-item" }}
          >
            {faqVisibles.map((item, i) => (
              <Accordion.Item key={item.q} value={`f-${i}`}>
                <Accordion.Control>
                  <Text fw={600} c="slate.8">
                    {item.q}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text c="slate.6" lh={1.75}>
                    {item.a}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Stack>
      </SectionShell>

      <Box
        id="turnos"
        py={{ base: 68, md: 96 }}
      >
        <Container size="xs">
          <Paper
            p={{ base: "xl", md: "2rem" }}
            radius="xl"
            withBorder={false}
            shadow="none"
            className="glass-panel glass-panel--hover"
          >
            <Stack gap="lg" ta="center">
              <Text
                size="sm"
                c="electric.7"
                tt="uppercase"
                lts={2}
                fw={600}
              >
                Turnos
              </Text>
              <Title order={2} c="slate.9" m={0}>
                Empezá tu proceso hoy
              </Title>
              <Text c="slate.6" lh={1.7}>
                Elegí un canal para coordinar. La primera sesión es un espacio
                para entender tu situación y definir el mejor camino.
              </Text>

              <Group justify="center" gap="xs" wrap="wrap">
                {CONTACTO.map((c) => (
                  <Button
                    key={c.id}
                    variant={canal === c.id ? "filled" : "light"}
                    color={canal === c.id ? "electric" : "slate"}
                    size="sm"
                    onClick={() => setCanal(c.id)}
                  >
                    {c.label}
                  </Button>
                ))}
              </Group>

              <Text size="sm" c="slate.5">
                {canalActual.hint}
              </Text>

              <Grid gap="sm" w="100%">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    placeholder="Tu nombre"
                    radius="md"
                    styles={{
                      input: {
                        backgroundColor: "rgba(255,255,255,0.45)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.75)",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    placeholder="Tu email"
                    radius="md"
                    styles={{
                      input: {
                        backgroundColor: "rgba(255,255,255,0.45)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.75)",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    placeholder="Contame brevemente en qué querés trabajar"
                    minRows={3}
                    radius="md"
                    styles={{
                      input: {
                        backgroundColor: "rgba(255,255,255,0.45)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.75)",
                      },
                    }}
                  />
                </Grid.Col>
              </Grid>

              <Group justify="center" mt="xs">
                <Button
                  component="a"
                  href="mailto:turnos@thompsonlorena.com"
                  variant="gradient"
                  gradient={{ from: "electric.6", to: "electric.8", deg: 120 }}
                  size="md"
                >
                  Enviar solicitud
                </Button>
                <Button
                  component="a"
                  href="https://wa.me/5490000000000"
                  variant="outline"
                  color="slate"
                  size="md"
                >
                  Abrir WhatsApp
                </Button>
              </Group>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <Box component="footer" py="xl">
        <Container size="sm">
          <Text size="sm" c="slate.6" ta="center">
            © {new Date().getFullYear()} Thompson Lorena · Consultora
            psicológica
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

function SimpleKpis() {
  return (
    <Grid gap="sm">
      {[
        { label: "Modalidad", value: "Online + presencial" },
        { label: "Duración sesión", value: "50 minutos" },
        { label: "Seguimiento", value: "Semanal" },
      ].map((item) => (
        <Grid.Col key={item.label} span={{ base: 12, sm: 4 }}>
          <Paper
            p="sm"
            withBorder={false}
            shadow="none"
            radius="md"
            className="glass-panel glass-panel--hover"
          >
            <Text size="xs" c="slate.5">
              {item.label}
            </Text>
            <Text size="sm" fw={600} c="slate.8">
              {item.value}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
