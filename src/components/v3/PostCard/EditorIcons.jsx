import React from 'react'
import cn from 'classnames'

const BoldIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill={color} fillRule="evenodd" d="M4,15.9094175 L5.91423245,15.9094175 C7.45578248,15.9094175 8.23502755,16 9.25990422,16 C13.681273,16 15.2736433,14.6247924 15.2736433,12.0884815 C15.2736433,10.4003525 13.8252639,9.00867535 12.1566631,9.00867535 C13.6643329,8.61340611 14.3758175,7.39465929 14.3758175,6.05239083 C14.3758175,4.14192285 12.758037,2.90670648 9.63258665,3.00552379 C8.18420722,3.05493244 6.61724703,3.07140199 6.67653741,3.12081065 L4.03388022,3.12081065 L4.03388022,4.47131388 L5.31285854,4.65247895 L5.31285854,14.4024535 L4,14.7565489 L4,15.9094175 Z M8.31125805,8.64634521 L8.32819816,4.38896612 C8.51453937,4.29838359 8.97192235,4.26544449 9.226024,4.26544449 C11.0386158,4.26544449 11.4875287,5.19597415 11.4875287,6.25826023 C11.4875287,7.14761602 11.4705886,8.71222342 9.41236521,8.71222342 C8.80252125,8.71222342 8.48912921,8.70398864 8.31125805,8.64634521 L8.31125805,8.64634521 Z M8.29431794,14.5589142 L8.29431794,10.0462571 C8.84487152,9.93920501 9.40389516,9.94743979 9.91209847,9.94743979 C11.6653999,9.94743979 12.1143128,11.0756041 12.1143128,12.2202379 C12.1143128,13.2742892 11.7077501,14.7812532 10.0306792,14.7812532 C9.25990422,14.7812532 8.57382976,14.6989054 8.29431794,14.5589142 L8.29431794,14.5589142 Z"/>
    </svg>
  )
}

const ItalicIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <polygon fill={color} fillRule="evenodd" points="7 16 12.191 16 12.252 15.176 10.802 14.929 12.226 4.105 13.651 3.892 13.747 3 8.704 3 8.599 3.892 9.823 4.105 8.398 14.929 7.096 15.184"/>
    </svg>
  )
}

const LinkIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill={color}>
        <path d="M13 2C11.7 2 10.4 2.5 9.5 3.5L8.3 4.6C7.9 5 7.9 5.6 8.3 6 8.7 6.4 9.3 6.4 9.7 6L10.9 4.8C12 3.7 14 3.7 15.1 4.8 15.7 5.4 16 6.2 16 7 16 7.8 15.7 8.6 15.1 9.1L14 10.3C13.6 10.7 13.6 11.3 14 11.7 14.2 11.9 14.5 12 14.7 12 14.9 12 15.2 11.9 15.4 11.7L16.6 10.5C17.5 9.6 18 8.3 18 7 18 5.7 17.5 4.4 16.5 3.5 15.6 2.5 14.3 2 13 2zM10.3 14L9.1 15.2C8 16.3 6 16.3 4.9 15.2 4.3 14.6 4 13.8 4 13 4 12.2 4.3 11.4 4.9 10.9L6 9.7C6.4 9.3 6.4 8.7 6 8.3 5.6 7.9 5 7.9 4.6 8.3L3.5 9.5C2.5 10.4 2 11.7 2 13 2 14.3 2.5 15.6 3.5 16.5 4.4 17.5 5.7 18 7 18 8.3 18 9.6 17.5 10.5 16.5L11.7 15.3C12.1 14.9 12.1 14.3 11.7 13.9 11.3 13.5 10.7 13.6 10.3 14z"/>
        <path d="M11.4,7.2 L7.2,11.4 C6.8,11.8 6.8,12.4 7.2,12.8 C7.4,13 7.7,13.1 7.9,13.1 C8.1,13.1 8.4,13 8.6,12.8 L12.8,8.6 C13.2,8.2 13.2,7.6 12.8,7.2 C12.4,6.8 11.8,6.8 11.4,7.2 Z"/>
      </g>
    </svg>
  )
}

const UnderlineIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill={color} fillRule="evenodd" d="M10.7962054,14.1235352 C6.94559152,14.1235352 5.31484375,12.2641602 5.33191964,8.5703125 C5.33191964,6.54492188 5.34045759,5.36181641 5.34899554,3.30322266 L4,3.12060547 L4,2 L9.26791295,2 L9.26791295,3.12060547 L7.79084821,3.30322266 L7.79084821,8.66162109 C7.79084821,12.1811523 9.37890625,12.9199219 11.1291853,12.9199219 C13.0502232,12.9199219 14.1516183,11.5419922 14.1430804,8.28808594 L14.1260045,3.31982422 L12.6404018,3.12060547 L12.6404018,2 L17.063058,2 L17.063058,3.12060547 L15.7823661,3.31982422 L15.7823661,8.27978516 C15.7823661,12.6542969 13.5368862,14.1235352 10.7962054,14.1235352 Z M4,16 L18,16 L18,18 L4,18 L4,16 Z"/>
    </svg>
  )
}

const CodeIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill={color}>
        <path d="M14.7 13.7L13.3 12.3 15.6 10 13.3 7.7 14.7 6.3 17.7 9.3C18.1 9.7 18.1 10.3 17.7 10.7L14.7 13.7zM5.3 13.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3L5.3 6.3 6.7 7.7 4.4 10 6.7 12.3 5.3 13.7zM8 17C7.9 17 7.8 17 7.7 16.9 7.2 16.7 6.9 16.2 7.1 15.6L11.1 3.6C11.3 3.1 11.8 2.8 12.4 3 12.9 3.2 13.2 3.7 13 4.3L9 16.3C8.8 16.7 8.4 17 8 17z"/>
      </g>
    </svg>
  )
}

const QuoteIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <path fill={color} d="M5.02362,6.56063 C3.83854,8.04197 3.66755,9.53493 4.01575,10.57953 C5.33164,9.53456 7.16042,9.75337 8.27402,10.7937 C9.39893,11.84461 9.49572,13.69192 8.77796,14.88819 C8.17417,15.89451 7.11384,16.50079 5.93072,16.50079 C3.23817,16.50079 2,14.12601 2,11.46142 C2,9.73123 2.44094,8.18163 3.32283,6.8126 C4.20472,5.44357 5.53595,4.33911 7.31653,3.49921 L7.79528,4.4315 C6.72021,4.88504 5.79633,5.59475 5.02362,6.56063 Z M13.79213,6.56063 C12.60706,8.04197 12.43606,9.53493 12.78426,10.57953 C13.37219,10.12599 14.01051,9.89921 14.69922,9.89921 C16.51086,9.89921 18,11.10579 18,13.2 C18,15.12572 16.52215,16.50079 14.69921,16.50079 C12.00667,16.50079 10.7685,14.12601 10.7685,11.46142 C10.7685,9.73124 11.20944,8.18163 12.09133,6.8126 C12.97322,5.44357 14.30445,4.33911 16.08503,3.49921 L16.56377,4.43149 C15.48871,4.88504 14.56483,5.59475 13.79213,6.56063 Z"/>
    </svg>
  )
}

const ImageIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill={color}>
        <path d="M17,18 L3,18 C2.4,18 2,17.6 2,17 L2,3 C2,2.4 2.4,2 3,2 L17,2 C17.6,2 18,2.4 18,3 L18,17 C18,17.6 17.6,18 17,18 Z M4,16 L16,16 L16,4 L4,4 L4,16 Z"/>
        <path d="M8,6 C8.6,6 9,6.4 9,7 C9,7.6 8.6,8 8,8 C7.4,8 7,7.6 7,7 C7,6.4 7.4,6 8,6 Z"/>
        <polygon points="5 14 7 10 9 12 12 8 15 14"/>
      </g>
    </svg>
  )
}

const OrderedListIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill={color}>
        <rect width="11" height="2" x="7" y="3"/>
        <rect width="11" height="2" x="7" y="9"/>
        <rect width="11" height="2" x="7" y="15"/>
        <path d="M2.36821 6L2.36821 5.45122 2.96557 5.40263C3.06275 5.39585 3.07668 5.36798 3.07668 5.26402L3.07668 2.8403C3.07668 2.75706 3.05596 2.71525 2.98628 2.69454L2.38215 2.56949 2.45861 2 4.12528 2 4.12528 5.26403C4.12528 5.37514 4.13206 5.39586 4.23639 5.40264L4.80588 5.45123 4.80588 6 2.36821 6zM2.04735 12L2.04735 11.37047 2.95439 10.48399C3.63788 9.82069 3.92897 9.55015 3.92897 9.16436 3.92897 8.91365 3.8071 8.73121 3.44847 8.73121 3.07589 8.73121 2.92025 8.85308 2.92025 9.33358L2 9.25209C2.00661 8.1762 2.82555 8 3.5362 8 4.5853 8 4.95751 8.44673 4.95751 9.08287 4.95751 9.71938 4.51776 10.13894 4.02367 10.61247L3.2587 11.34367 4.25384 11.34367C4.32138 11.34367 4.34854 11.33009 4.36213 11.26218L4.45683 10.72772 5.17409 10.72772 5.17409 12 2.04735 12zM4.34447 15.68226C4.9109 15.76896 5.22374 16.10853 5.22374 16.70783 5.22373 17.5871 4.56447 18 3.61187 18 2.93923 18 2.33993 17.7605 2 17.38733L2.53283 16.80139C2.78606 17.04776 3.06566 17.24066 3.53203 17.24066 3.90519 17.24066 4.22489 17.10772 4.22489 16.64136 4.22489 16.23496 3.97166 16.06843 3.55876 16.06843 3.39223 16.06843 3.26579 16.0818 3.06566 16.11503L3.06566 15.44926 3.39222 15.40916C3.87159 15.34919 4.13132 15.11619 4.13132 14.68992 4.13132 14.43669 4.01825 14.23042 3.64509 14.23042 3.28565 14.23042 3.11262 14.35035 3.11262 14.82322L2.20012 14.74302C2.20012 13.69072 2.99269 13.51082 3.69205 13.51082 4.71762 13.51082 5.11065 13.90385 5.11065 14.61659 5.11065 15.17616 4.76422 15.52909 4.34445 15.65552L4.34445 15.68226 4.34447 15.68226z"/>
      </g>
    </svg>
  )
}

const UnorderedListIcon = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill={color}>
        <circle cx="4" cy="4" r="2"/>
        <circle cx="4" cy="10" r="2"/>
        <circle cx="4" cy="16" r="2"/>
        <rect width="10" height="2" x="8" y="3"/>
        <rect width="10" height="2" x="8" y="9"/>
        <rect width="10" height="2" x="8" y="15"/>
      </g>
    </svg>
  )
}

const icons = {
  bold: BoldIcon,
  italic: ItalicIcon,
  link: LinkIcon,
  underline: UnderlineIcon,
  code: CodeIcon,
  quote: QuoteIcon,
  image: ImageIcon,
  'ordered-list': OrderedListIcon,
  'unordered-list': UnorderedListIcon
}

function render(type, active) {
  const EditorIcon = icons[type]
  const colorInactive = '#37373C'
  const colorActive = '#FFFFFF'
  const color = active ? colorActive : colorInactive
  return (
    <div className={cn('editor-tool', active?'tool-active':'tool-inactive')}>
      <EditorIcon color={color}/>
    </div>  
  )
}

export default {
  render
}