"use client"

import styled from "styled-components";
import logo from "../app/assets/irSoftwares.png"
import desktop from "../app/assets/Desktop.png"
import exempleCM from "../app/assets/cm.png"
import exempleTwo from "../app/assets/exemple2.png"
import comofunciona from "../app/assets/comofunciona.png"
import time from "../app/assets/time.png"
import flow from "../app/assets/flow.png"
import stars from "../app/assets/stars.png"
import software from "../app/assets/software.jpg"

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface ArrowIconProps {
  $open: boolean;
}

interface HamburgerProps {
  $open: boolean;
}


const Main = styled.main`
  padding: 0rem 2rem;
  background-color: #f8f8f8;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;
const Nav = styled.nav`
  display: flex;
  position: sticky;
  margin: 0rem 5rem;
  background-color: #fff;
  color: #0F172A;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  height: 4rem;
  border-radius: 0px 0px 12px 12px;
  top: 0rem;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  padding: 0rem .5rem;
  font-family: 'Roboto';

  img {
    width: 150px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavItens = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 500;

  a {
    display: flex;
    align-items: center;
    gap: .3rem;
    padding: 0.2rem .5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0F172A;
      color: white;
    }
  }

  @media (max-width: 1106px) {
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 1rem;
    display: none;

    &.open {
      display: flex;
    }
  }
`;

const NavButton = styled.div`

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: #5E17EB;
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
    padding: 0.5rem 1rem;

    span {
      transition: all .3s;
    }

    svg {
      transition: all .3s;
    }

    &:hover {
      background-color: #6b21ff;

      span {
        padding-right: .5rem;
      }
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  @media (max-width: 1106px) {
    display: none;
  }
`;

const NavButtonMobile = styled(NavButton)`
  display: none;

  @media (max-width: 1106px) {
    display: block;
    margin-top: 1rem;
  }
`;

const Dropdown = styled.div`
  position: relative;
  
  a {
    &:hover {

    }
  }

  &:hover > div {
    display: block;
  }
`;

const DropdownLink = styled.a`
  color: #0F172A !important;
  transition: color 0.3s;

  &:hover {
    color: #5E17EB !important;
  }
`;


const ArrowIcon = styled(IoIosArrowDown) <ArrowIconProps>`
  transition: transform 0.3s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  min-width: 200px;
  display: none;
  flex-direction: column;
  z-index: 1001;

  a {
    padding: 0.75rem 1rem;
    white-space: nowrap;

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

interface HamburgerProps {
  $open: boolean;
}

const Hamburger = styled.div<HamburgerProps>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 2001;

  span {
    position: absolute;
    height: 3px;
    width: 25px;
    background: #000;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: ${({ $open }) => ($open ? "37%" : "0")};
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? "translateX(-10px)" : "translateX(0)")};
  }

  span:nth-child(3) {
    bottom: ${({ $open }) => ($open ? "50%" : "0")};
    transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media (max-width: 1106px) {
    display: flex;
  }
`;


const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: .2rem;
  }
`;
const SectionHeader = styled.div`
  padding: 0rem 0rem;
`
const MoreInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #5E17EB;
      color: white;
      border-radius: 0.5rem;
      text-decoration: none;
      margin-top: 0rem;

      span {
        transition: all .3s;
      }

      svg {
        transition: all .3s;
      }

      &:hover {
        background-color: #6b21ff;

        span {
          padding-right: .5rem;
        }
        svg {
          transform: translateX(0.5rem);
        }
      }
    }
  }
`;
const SpanError = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-style: italic;
`;
const ProjectsExemple = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding: 0rem 2rem;
  gap: 3rem;
  color: #0F172A;
`;
const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-width: 500px;
  }

  p {
    text-align: justify;
    max-width: 600px;
    font-size: .9rem;
    color: #555;
  }
`;
const Teste = styled(Project)`
  flex-direction: row-reverse;

    img {
    width: 100%;
    max-width: 350px;
  }
`;
const SectionBenes = styled.section`
  position: relative;
  padding: 4rem 1rem;
  padding-top: 1rem;
  margin: 10rem auto;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  color: #0F172A;

  h2 {
    margin-bottom: 2rem;
  }



  /* &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -10px;
    width: 200%;
    height: 200px;
    background: #4a12c7;
    transform: rotate(-3deg);
    z-index: 0;
  } */

  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    right: -100px;
    width: 250%;
    height: 140px;
    background: #3b0d99;
    transform: rotate(3deg);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;
const StrokedText = styled.p`
  color: #141414;
  /* font-weight: 500;
  text-shadow:
    -1px -1px 0 #4a12c7,
     1px -1px 0 #4a12c7,
    -1px  1px 0 #4a12c7,
     1px  1px 0 #4a12c7;
  text-align: center;
  margin: 0 auto; */
`;
const Benes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  min-width: 100%;
  max-width: 100%;

  &::-webkit-scrollbar {
    height: 3px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const BenesItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  min-width: 200px;


  h3 {
    color: #4a12c7;
  }
`;
const Description = styled.span`
  font-weight: 300;
  color: #0F172A;
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
  color: #000;
  gap: 3rem;
  padding: 0rem 2rem;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
  

  div {
  text-align: start;
    display: flex;
  flex-direction: column;
    align-items: center;
  justify-content: center;

  }

  ul {
    display: flex;
      align-items: center;
  justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    text-decoration: underline;
  }
`;
const FooterImage = styled.div`
  height: 100px;
      img {
      height: 120px;
      object-fit: scale-down;

    }
`;
const Container = styled.section`
  position: relative;
  background-color: #0F172A;
  overflow: hidden;
  padding: 2rem 0rem;
`;
const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
const TextBlock = styled.div`
  flex: 1;

  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: start;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ol {
    list-style: decimal inside;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
  }
`;
const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;


  img {
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
const Contact = styled.div`
  background: linear-gradient(135deg, #5E17EB 0%, #A27DF5 35%, #85C8E4 70%, #0E84C5 100%);
  margin-bottom: 2rem;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 1);

a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #5E17EB, #7A3AED);
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(94, 23, 235, 0.3);
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  span {
    transition: all 0.3s ease;
  }

  svg {
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #6b21ff, #915eff);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(94, 23, 235, 0.5);

    span {
      padding-right: 0.5rem;
    }

    svg {
      transform: translateX(0.5rem);
    }
  }

  &:active {
    transform: scale(0.98);
  }
}

`;
const SpanViolet = styled.span`
  color: #4a12c7;
  font-weight: 600;
`;
const MainContainer = styled.div`
background-color: #f8f8f8;
`;


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <MainContainer>
      <Nav>
        <img src={logo.src} alt="Logo Ir Softwares" />

        <Hamburger $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>


        <NavItens className={menuOpen ? "open" : ""}>
          <a href="#quem-somos">Quem somos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-funciona">Como funciona</a>

          <Dropdown
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#cases">
              <span>Cases</span> <ArrowIcon $open={dropdownOpen} />
            </a>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownLink href="#case-condominium">Condominium Management</DropdownLink>
                <DropdownLink href="#case-orderflow">OrderFlow Manager</DropdownLink>
              </DropdownMenu>
            )}
          </Dropdown>

          <a href="#contato">Contato</a>

          <NavButtonMobile>
            <a
              href="https://wa.me/5531991211683?text=Ol%C3%A1%21+Quero+iniciar+um+projeto+com+a+IR+SOFTWARE.+Pode+me+ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Dê início à sua ideia</span>
              <FaArrowRight />
            </a>
          </NavButtonMobile>
        </NavItens>

        <NavButton className="desktop-only">
          <a
            href="https://wa.me/5531991211683?text=Ol%C3%A1%21+Quero+iniciar+um+projeto+com+a+IR+SOFTWARE.+Pode+me+ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dê início à sua ideia</span>
            <FaArrowRight />
          </a>
        </NavButton>
      </Nav>
      <Main >
        <Section id="quem-somos">
          <SectionHeader>
            <Description className="mt-4 text-lg max-w-xl mx-auto">
              Tecnologia sob medida, com foco no que realmente importa: o seu crescimento.
            </Description>
            <h1 className="text-4xl font-bold">
              <span>Isso é, </span>
              <br />
              <span style={{ color: '#4a12c7' }}>IR SOFTWARES</span>
            </h1>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Soluções personalizadas para pequenas e médias empresas. Tudo o que você precisa para tirar seu app ou sistema do papel.
            </p>
            <MoreInformation>
              <span>Deseja receber mais informações?</span>
              <form
                action="https://formsubmit.co/irsoftwarescompany@gmail.com"
                method="POST"
                onSubmit={(e) => {
                  const form = e.target as HTMLFormElement;
                  const input = form.querySelector("input") as HTMLInputElement;

                  if (!input.value.includes('@')) {
                    e.preventDefault();
                    setError("Digite um e-mail válido");
                  } else {
                    setError(null);
                  }
                }}
              >
                <input type="email" name="email" placeholder="Insira seu e-mail profissional" required />
                <button type="submit" className="inline-block mt-6 px-6 py-3 ">
                  <span>Seguir</span>
                  <FaArrowRight />
                </button>
              </form>
              {error && <SpanError>{error}</SpanError>}
            </MoreInformation>
          </SectionHeader>
          <img src={desktop.src} alt="Imagem do seu software em uso" />
        </Section>

        <SectionBenes id="beneficios" className="py-16 px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Benefícios de ter seu próprio sistema</h2>
          <div>
            <StrokedText>
              Ter um sistema feito sob medida garante mais precisão, agilidade e controle em cada etapa do seu negócio.
              Você deixa de depender de soluções genéricas e passa a contar com uma ferramenta pensada exatamente para a sua operação.
            </StrokedText>
          </div>

          <Benes>
            <BenesItens>
              <img src={time.src} alt="Icone de relogio" />
              <h3 className="text-lg font-semibold mt-2">Seu ritmo, seu sistema!</h3>
              <p className="text-sm text-gray-600">
                Automatize processos no ritmo da sua empresa. Suas rotinas, seus horários, suas regras.
              </p>
            </BenesItens>
            <BenesItens>
              <img src={flow.src} alt="Icone de fluxos" />
              <h3 className="text-lg font-semibold mt-2">O fluxo ideal para seu sistema</h3>
              <p className="text-sm text-gray-600">
                Elimine etapas desnecessárias e organize os processos da forma mais lógica para você e sua equipe.
              </p>
            </BenesItens>
            <BenesItens>
              <img src={stars.src} alt="Icone de estrelas" />
              <h3 className="text-lg font-semibold mt-2">Tudo sob seu controle</h3>
              <p className="text-sm text-gray-600">
                Você acompanha cada detalhe da construção e garante que o resultado final atenda exatamente às suas expectativas.              </p>
            </BenesItens>

          </Benes>
        </SectionBenes>

      </Main>

      <Container id="como-funciona">
        <Content>
          <TextBlock>
            <h2>Como funciona</h2>
            <ol>
              <li>Você compartilha sua ideia ou necessidade com a gente</li>
              <li>Marcamos uma conversa para entender tudo com clareza</li>
              <li>Enviamos uma proposta técnica com prazos, valores e escopo</li>
              <li>Com tudo aprovado, iniciamos o desenvolvimento do software</li>
              <li>Você acompanha cada etapa do projeto de forma simples e transparente</li>
              <li>Entregamos o sistema pronto para uso — funcional, leve e sob medida</li>
            </ol>
          </TextBlock>
          <ImageBlock>
            <img
              src={comofunciona.src}
              alt="Desenvolvimento de software"
            />
          </ImageBlock>
        </Content>

      </Container>

      <Section id="cases">
        <ProjectsExemple>
          <Project id="case-condominium">
            <div>
              <h2>Condominium <SpanViolet>Management</SpanViolet></h2>
              <p>
                O Condominium Management é uma solução completa e personalizada para a gestão de condomínios. Desenvolvido para facilitar o dia a dia de administradores e moradores, o sistema centraliza e automatiza processos, garantindo mais organização, eficiência e praticidade.
                Trazendo como beneficio a redução de trabalho manual e aumento da produtividade.
              </p>
            </div>
            <img src={exempleCM.src} alt="Projeto Condominium Managment" />
          </Project>
          <Teste id="case-orderflow">
            <div>
              <h2>OrderFlow <SpanViolet>Manager</SpanViolet></h2>
              <p>
                Uma solução moderna para gestão de pedidos e mesas em restaurantes, projetada para otimizar processos internos e oferecer uma experiência mais fluida e eficiente para clientes e funcionários. Com foco na praticidade, o sistema integra funcionalidades de gerenciamento de mesas, acompanhamento de pedidos e suporte a operações, tudo em uma interface intuitiva e personalizável. Ideal para restaurantes que buscam automatizar tarefas manuais e melhorar a comunicação entre equipes e clientes.
              </p>
            </div>
            <img src={exempleTwo.src} alt="Projeto Condominium Managment" />
          </Teste>
        </ProjectsExemple>
      </Section>

      <Contact id="contato" className="bg-zinc-900 text-white py-20 px-6 text-center relative overflow-hidden ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Eai, bora tirar sua ideia do papel?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            <Description>
              Vamos conversar! A IR SOFTWARE transforma sua ideia em um sistema leve, funcional e sob medida. Entre em contato e descubra como podemos tornar sua ideia realidade.
            </Description>
          </p>
          <a
            href="https://wa.me/5531991211683?text=Ol%C3%A1%21+Estou+pronto+para+tirar+minha+ideia+do+papel+e+acredito+que+a+IR+SOFTWARE+pode+ser+a+parceira+ideal+para+isso.+Podemos+iniciar+essa+conversa%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition-all duration-300"
          >
            Falar com a IR SOFTWARE
            <FaArrowRight />

          </a>
        </div>

        <div className="absolute top-0 left-1/2 w-[120%] h-[100%] bg-gradient-to-br from-green-600/10 via-transparent to-transparent rotate-12 -translate-x-1/2 pointer-events-none animate-pulse"></div>
      </Contact>

      <Footer>
        <div className="text-center py-4">
          <p>&copy; 2025. IR SOFTWARES</p>
          <span><i>Todos os direitos reservados.</i></span>
        </div>
        <div>
          <ul>
            <li>
              <a href="#quem-somos">Quem somos</a>
            </li>
            <li>
              <a href="#beneficios">Benefícios</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
            <li>
              <a href="#cases">Cases </a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>Terms e privacy</li>
          </ul>
        </div>
        <FooterImage>
          <img src={logo.src} alt="" />
        </FooterImage>
      </Footer>
    </MainContainer>
  );
}
