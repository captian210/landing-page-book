import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image/Image';

const images = {
  chrome:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjUuNzkgMTI2LjIyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2VmM2YzNjt9LmNscy0ye2ZpbGw6I2ZjZDkwMDt9LmNscy0ze2ZpbGw6IzYxYmM1Yjt9LmNscy00e2ZpbGw6IzVhYjA1NTt9LmNscy01e2ZpbGw6I2ZmZjt9LmNscy02e2ZpbGw6IzRkOGNmNDt9LmNscy03e2ZpbGw6I2VhY2EwNTt9LmNscy04e2ZpbGw6I2RmM2EzMjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNocm9tZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjIuNzgsMHMzNy0xLjY3LDU2LjY3LDM1LjY0SDU5LjU4UzQ4LjI4LDM1LjI1LDM4LjYzLDQ5Yy0yLjc4LDUuNzUtNS43NiwxMS43LTIuNDEsMjMuMzZDMzEuNCw2NC4xNSwxMC42NCwyOCwxMC42NCwyOFMyNS4yOCwxLjQ5LDYyLjc4LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIC0wLjAxKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExNy41Myw5NC42cy0xNy4xMSwzMy01OS4xOCwzMS4zMkw4OC4yOSw3NC4wN3M2LTkuNi0xLjA3LTI0LjgyQzgzLjYzLDQ0LDgwLDM4LjQ0LDY4LjIyLDM1LjQ5YzkuNDgtLjA5LDUxLjE2LDAsNTEuMTYsMFMxMzUsNjEuNDMsMTE3LjUzLDk0LjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIC0wLjAxKSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTguMTksOTQuODZzLTIwLTMxLjI4LDIuNDgtNjYuOTFDMTUuODUsMzcsNDAuNiw3OS44LDQwLjYsNzkuOHM1LjM0LDEwLDIyLDExLjQ4YzYuMzYtLjQ3LDEzLS44NywyMS40NC05LjU5Qzc5LjM3LDg5Ljk0LDU4LjQ2LDEyNiw1OC40NiwxMjZzLTMwLjMuNTUtNTAuMy0zMS4xM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgLTAuMDEpIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTguMzMsMTI2LjIzbDguNDUtMzUuMTRhMjguMiwyOC4yLDAsMCwwLDE3LTkuMjRDNzksOTAuMzIsNTguMzQsMTI2LjIzLDU4LjM0LDEyNi4yM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgLTAuMDEpIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMzQuNTIsNjMuNTFBMjguMDYsMjguMDYsMCwxLDEsNjIuNTgsOTEuNTcsMjguMDYsMjguMDYsMCwwLDEsMzQuNTIsNjMuNTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIC0wLjAxKSIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTM5LjIyLDYzLjUxQTIzLjM2LDIzLjM2LDAsMSwxLDYyLjU4LDg2Ljg3aDBBMjMuMzYsMjMuMzYsMCwwLDEsMzkuMjIsNjMuNTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAxIC0wLjAxKSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTExOS4zMywzNS41MSw4NC42NSw0NS42NkEyOC4xMywyOC4xMywwLDAsMCw2OC4xNywzNS41MUM3Ny45MywzNS40NiwxMTkuMzMsMzUuNTEsMTE5LjMzLDM1LjUxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAtMC4wMSkiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0zNS41NCw3MWMtNC44Ny04LjQ0LTI0LjktNDMtMjQuOS00M0wzNi4zMiw1My40MUEyNS4zMSwyNS4zMSwwLDAsMCwzNC42OCw2Ni42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAtMC4wMSkiLz48L3N2Zz4=',
  iexplore:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQgMTIxLjc3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzFlYmJlZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmlleHBsb3JlPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjYsNjYuNDVhNTUuMzksNTUuMzksMCwwLDAtNy0yN0MxMzgtMy40NCw5OC43MiwyLjg0LDk2LjU0LDMuMjdhOTkuODEsOTkuODEsMCwwLDAtMjMuMSw3LjU1Yy0xLS4wNi0yLjEtLjA5LTMuMTYtLjA5QTU1Ljc0LDU1Ljc0LDAsMCwwLDE2LDU0YzE0LTE1LjY1LDIzLjcyLTIyLDI5LjU3LTI0LjUtLjkzLjgzLTEuODUsMS42Ny0yLjc1LDIuNTNsLS44OC44NWMtLjYuNTctMS4xOCwxLjE0LTEuNzcsMS43MmwtMSwxTDM3LjYsMzcuMTVsLTEuMDUsMS4xMmMtLjQ2LjUtLjkzLDEtMS4zOCwxLjVzLS43MS43OC0xLjA1LDEuMThjLS43OS44OC0xLjU2LDEuNzctMi4zMywyLjY3LS40LjQ3LS43OS45NC0xLjE4LDEuNDJzLS43LjgzLTEsMS4yNWwtMS4wOSwxLjM1LTEsMS4zMS0uOTUsMS4yNS0xLjA2LDEuNC0uNzMsMXEtMy4xNSw0LjMtNiw4Ljc4czAsMCwwLDBjLS40Ny43My0uOTQsMS40Ni0xLjM5LDIuMmwtLjA4LjEyLTEuMzIsMi4xNiwwLC4wOGMtMS4wOSwxLjgxLTIuMTQsMy42NC0zLjE3LDUuNDlBMTIzLjQ5LDEyMy40OSwwLDAsMCw1LjEyLDg3LjI3Qy0xMC43MywxNDMuOTMsMzguNzMsMTIwLDQ1LjYzLDExNi40M2E1NS43NSw1NS43NSwwLDAsMCw3Ny4xNi0zMS4zMkg5My41MkEyNS43NCwyNS43NCwwLDAsMSw3MS4yNiw5Ny4zOGMtMTQsMC0yNS40Mi0xMC42My0yNS40Mi0yMy43NWg3OS43QTU2LjcyLDU2LjcyLDAsMCwwLDEyNiw2Ni40NVpNMTE1LjU5LDExLjYyYzQuOCwzLjIzLDguNjUsOC4zMiwyLDI1LjQ1QTU1LjkzLDU1LjkzLDAsMCwwLDkwLjQyLDE0LjQ4YzUuMTUtMi40OSwxNy45Mi03Ljc2LDI1LjE3LTIuODZabS0xMDIsMTA0LjdjLTMuOTEtNC00LjYtMTMuNzcsNC0zMS41NmE1NS44Niw1NS44NiwwLDAsMCwyNC4yNywyOS42NWMtNS41OSwzLjA4LTIwLjQxLDEwLTI4LjI5LDEuOTFabTMyLjEtNTcuOTNjLjQ1LTEyLjc1LDExLjU1LTIzLDI1LjE4LTIzczI0Ljc0LDEwLjIyLDI1LjE4LDIzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIuNzEpIi8+PC9zdmc+',
  opera:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI2IDEyNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxLjAzIiB5MT0iMTI5IiB4Mj0iMS4wMyIgeTI9IjEyOC45NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgyMDgzLjAxLCAwLCAwLCAtMjUwMCwgLTIwODIuMDEsIDMyMjUwMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAuMyIgc3RvcC1jb2xvcj0iI2ZmMWIyZCIvPjxzdG9wIG9mZnNldD0iMC40NCIgc3RvcC1jb2xvcj0iI2ZhMWEyYyIvPjxzdG9wIG9mZnNldD0iMC41OSIgc3RvcC1jb2xvcj0iI2VkMTUyOCIvPjxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iI2Q2MGUyMSIvPjxzdG9wIG9mZnNldD0iMC45MyIgc3RvcC1jb2xvcj0iI2I3MDUxOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2E3MDAxNCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgeDE9IjAuNTUiIHkxPSIxMjkuMDciIHgyPSIwLjU1IiB5Mj0iMTI5LjAyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDE2NjEuMTMsIDAsIDAsIC0yMTcxLjg4LCAtODIxLjI3LCAyODAzMzcuOTMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOWMwMDAwIi8+PHN0b3Agb2Zmc2V0PSIwLjciIHN0b3AtY29sb3I9IiNmZjRiNGIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+b3BlcmE8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzLjM2LDk5LjQ5Yy03LTguMjItMTEuNDctMjAuMzgtMTEuNzctMzR2LTNjLjMtMTMuNjMsNC44My0yNS43OSwxMS43Ny0zNCw5LTExLjcxLDIyLjM0LTE3LDM3LjM1LTE3LDkuMjYsMCwxOCwuNjQsMjUuMzUsNS41NkE2Mi4zNCw2Mi4zNCwwLDAsMCw2NC4zMiwxaC0uMjRhNjMsNjMsMCwwLDAtMywxMjZjMSwwLDIsMCwzLDBhNjIuNTQsNjIuNTQsMCwwLDAsNDItMTZjLTcuMzgsNC45My0xNS42LDUuMTItMjQuODUsNS4xMi0xNSwuMDUtMjguODUtNC44Mi0zNy44NS0xNi41OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjA4IC0xKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQzLjM2LDI4LjUxYzUuNzYtNi44NCwxMy4yNC0xMC45MiwyMS40MS0xMC45MkM4My4xMywxNy41OSw5OCwzOC4zNiw5OCw2NC4wNXMtMTQuODYsNDYuNDYtMzMuMjIsNDYuNDZjLTguMTcsMC0xNS42MS00LjEzLTIxLjQxLTEwLjkyLDksMTEuNzEsMjIuNDksMTkuMTksMzcuNDUsMTkuMTlhNDUuMjYsNDUuMjYsMCwwLDAsMjUuMjUtNy43Myw2My4wNiw2My4wNiwwLDAsMCwwLTk0QTQ1LjE0LDQ1LjE0LDAsMCwwLDgwLjgxLDkuMzJjLTE1LDAtMjguNDUsNy40My0zNy40NSwxOS4xOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjA4IC0xKSIvPjwvc3ZnPg==',
  firefox:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI0Ljg1IDExOS44MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI0MjAuMjgiIHkxPSItNDUzLjIyIiB4Mj0iNDIwLjU5IiB5Mj0iLTM4NS4wMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjY5LCAwLCAwLCAtMS42OSwgLTY0Ni42NiwgLTY1MC42NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MDQzZTIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0MThkZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSI3MTYuNDIiIHkxPSItMTI2NC44MSIgeDI9IjY4NC4xOSIgeTI9IjI2LjM0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuMDksIDAsIDAsIC0wLjA5LCAwLjkxLCAxNC40MikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmYzU1MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmMyMDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU+ZmlyZWZveDwvdGl0bGU+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2My4wMyIgY3k9IjU5LjI0IiByPSI1OS4yNCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEyNS44Miw0Ni45bC0xLjQ1LDkuMjZTMTIyLjMsMzksMTE5Ljc3LDMyLjZjLTMuODgtOS44Mi01LjYxLTkuNzQtNS42Mi05LjczLDIuNiw2LjYsMi4xMywxMC4xNSwyLjEzLDEwLjE1cy00LjYxLTEyLjU0LTE2Ljc5LTE2LjUzYy0xMy41LTQuNDItMjAuOC0zLjIxLTIxLjY0LTNoLS4zN2wuMjksMGgwYy4wNi4wNywxNC45MSwyLjU5LDE3LjU1LDYuMjFhNTEuNTMsNTEuNTMsMCwwLDAtMTIuNTksMS44MWMtLjI5LjA4LDIzLjExLDIuOTEsMjcuODksMjYuMjUsMCwwLTIuNTctNS4zNC01Ljc0LTYuMjUsMi4wOSw2LjM0LDEuNTUsMTguMzYtLjQzLDI0LjMzLS4yNi43Ny0uNTItMy4zMi00LjQzLTUuMDgsMS4yNSw5LS4wOCwyMy4xOS02LjMxLDI3LjEtLjQ4LjMxLDMuOTEtMTQsLjg5LTguNDktMTcuNCwyNi42NC0zOCwxMi4yOS00Ny4yMiw2LDQuNzQsMSwxMy43NC0uMTYsMTcuNzItMy4xMmgwYzQuMzMtMyw2Ljg5LTUuMTEsOS4xOS00LjZzMy44My0xLjc5LDItMy44NGExMS45MywxMS45MywwLDAsMC0xMi0zLjMzYy00LjE0LDEuMDktOS4yOCw1LjY3LTE3LjEyLDFDNDEuMTgsNjgsNDAuNjEsNjUsNDAuNTYsNjNhMTQuMTIsMTQuMTIsMCwwLDEsLjU2LTJjLjY5LTEuOTMsMi43OS0yLjUyLDQtM2ExOC40NSwxOC40NSwwLDAsMSw1LjQ4LDEuODhjMC0uNiwwLTEuMzksMC0yLjI5YTUuNzYsNS43NiwwLDAsMC0uMjEtMi42MiwxOS40NywxOS40NywwLDAsMC0uODItMy43NGgwczAsMCwwLDBoMGEuMDguMDgsMCwwLDAsMC0uMDZjLjEzLS41NiwxLjQ3LTEuNjQsMy4xNC0yLjgxLDEuNS0xLDMuMjYtMi4xNSw0LjY0LTMsMS4yMy0uNzYsMi4xNi0xLjMzLDIuMzYtMS40N2wuMjYtLjIuMDYtLjA1LDAsMEE0LjkzLDQuOTMsMCwwLDAsNjIsMzkuOTJoMGMwLS4wNiwwLS4xMiwwLS4xOWEuNTcuNTcsMCwwLDAsMC0uMTNzMC0uMDcsMC0uMXYtLjI2aDBjMC0uMiwwLS40MSwwLS42M2ExLjcyLDEuNzIsMCwwLDAsMC0uMzRzMCwwLDAsMHYwczAsMCwwLS4wNWgwYS4xNC4xNCwwLDAsMSwwLS4wNmgwYy0uMjItLjUtMS0uNjktNC4zMi0uNzVoMGMtMS4zNSwwLTMuMTIsMC01LjQzLDAtNC4wNSwwLTYuMjktNC03LTUuNUExNi4yMiwxNi4yMiwwLDAsMSw1My41OSwyMGMuMDktLjA1LjA3LS4wOSwwLS4xMi45MS0uNTUtMTEsMC0xNi40OCw2Ljk0YTI3LDI3LDAsMCwwLTEyLjc1LS4yNywxNC41MywxNC41MywwLDAsMS0yLjYyLS4zMmMtMi40My0yLjItNS45MS02LjI2LTYuMDktMTEuMWwwLDBhLjYxLjYxLDAsMCwxLDAtLjE0cy03LjQsNS42OS02LjMsMjEuMTdjMCwuMjUsMCwuNDksMCwuNzJhMTkuMzYsMTkuMzYsMCwwLDAtMy4wNyw1LjQ5Yy0xLjc4LDMuNjEtMy41OCw5LTUsMTcuMjlhNDAuNzMsNDAuNzMsMCwwLDEsMy4wOC02LjkyYy0xLjUxLDQuNjMtMi43LDExLjgyLTIsMjIuNjIsMCwwLC4xOS0yLjM5Ljg0LTUuODQuNTEsNi43LDIuNzUsMTUsOC40LDI0LjY5QzIyLjMsMTEyLjg0LDM5LDEyMi4yNyw1Ny40LDEyMy43MWE2My4yOCw2My4yOCwwLDAsMCw5LjkzLDBsLjkyLS4wN2E3MC4zNiw3MC4zNiwwLDAsMCwxMS4zNy0xLjc1YzUxLjg0LTEyLjUyLDQ2LjItNzUsNDYuMi03NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMTUgLTQuMDkpIi8+PC9zdmc+',
  safari:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjYuOTQgMTI2Ljk0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzBhZjt9LmNscy0ze2ZpbGw6I2UwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnNhZmFyaTwvdGl0bGU+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2My40NyIgY3k9IjYzLjQ3IiByPSI2My40NyIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNjMuNDciIGN5PSI2My40NyIgcj0iNTcuNDciLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMDQsMjQuNDksNTcuMzUsNTcuNjUsNzEuMTksNzEuMzksMTA0LDI0LjQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41MyAtMSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny40LDU3LjU1LDcxLjI0LDcxLjI5LDI0LjU5LDEwNC40NSw1Ny40LDU3LjU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNTMgLTEpIi8+PC9zdmc+',
  netscape:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQgMTI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzE1YWVhYzt9LmNscy0ye2ZpbGw6I2ZmZjt9LmNscy0ze2ZpbGw6IzA5MDkwOTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm5ldHNjYXBlPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NC43NCw3NEg2NGExNDguMTksMTQ4LjE5LDAsMCwwLTIyLjIzLDEuNjdWNDMuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyNiw2NGE2MS44Myw2MS44MywwLDAsMS00LDIxLjg1LDE0Ni41LDE0Ni41LDAsMCwwLTI5LjkzLTkuMThWMzQuNzNsOS44My0xLjQzVjI4LjdINzR2NC42bDEyLjIxLDEuNDhWNzUuNjdxLTMuNjktLjU3LTcuNDQtLjk0bC0zNC4zMi00NkgyNi42MXY0LjZsOC4yMiwxLDEuMDYsMS40MXY0MUExNDYuNSwxNDYuNSwwLDAsMCw2LDg1Ljg1LDYyLDYyLDAsMSwxLDEyNiw2NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM1Ljg5LDc2LjY3VjkyLjU5QTE0Ni4xMywxNDYuMTMsMCwwLDAsMTIuNzksOTksNjIsNjIsMCwwLDEsNiw4NS44NSwxNDYuNSwxNDYuNSwwLDAsMSwzNS44OSw3Ni42N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc3LjI3LDkwLjYzYy00LjUzLS40MS05LjEyLS42My0xMy43Ni0uNjNhMTQ3LjA3LDE0Ny4wNywwLDAsMC0yMS43NCwxLjZWNzUuNjdBMTQ4LjE5LDE0OC4xOSwwLDAsMSw2NCw3NGguNzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMjIsODUuODVhNjEuNjgsNjEuNjgsMCwwLDEtNywxMy4zOSwxNDYuNDUsMTQ2LjQ1LDAsMCwwLTIyLjktNi40NlY3Ni42N0ExNDYuNSwxNDYuNSwwLDAsMSwxMjIsODUuODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMTUsOTkuMjRBNjIsNjIsMCwwLDEsMTIuNzksOTlhMTQ2LjEzLDE0Ni4xMywwLDAsMSwyMy4xLTYuMzZ2NS42NEwyNi4wNiw5OS42djQuNjFINTRWOTkuNkw0MS43Nyw5OC4wNlY5MS42QTE0Ny4wNywxNDcuMDcsMCwwLDEsNjMuNTEsOTBjNC42NCwwLDkuMjMuMjIsMTMuNzYuNjNxNC41Mi40Miw5LDEuMTIsMywuNDUsNS44OCwxQTE0Ni40NSwxNDYuNDUsMCwwLDEsMTE1LDk5LjI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTAxLjk0LDI4Ljd2NC42bC05LjgzLDEuNDNWOTIuNzhxLTIuOTItLjU5LTUuODgtMS00LjQ0LS43LTktMS4xMkw2NC43NCw3NGwtMjMtMzAuNVY5OC4wNkw1NCw5OS42djQuNjFIMjYuMDZWOTkuNmw5LjgzLTEuMzdWMzUuN2wtMS4wNi0xLjQxLTguMjItMVYyOC43SDQ0LjQ3bDM0LjMyLDQ2cTMuNzUuMzgsNy40NC45NFYzNC43OEw3NCwzMy4zVjI4LjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiAtMikiLz48L3N2Zz4=',
  maxthon:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjQgMTI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzE1OGFmNDt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPm1heHRob248L3RpdGxlPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNjIiIGN5PSI2MiIgcj0iNjIiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjUwLjE5IiB5PSI2Ni4xOSIgd2lkdGg9IjIzLjQ2IiBoZWlnaHQ9IjI2LjgxIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODQuNTQsNTUuM2wtNDYuMDgtLjg0UTM4LjI0LDczLjc0LDM4LDkzSDE1VjMxSDg0LjU0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEwNyw1NFY5M0g4My41NFYzMUg4NGEyMywyMywwLDAsMSwyMywyM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04NC41NCwzMVoiLz48L3N2Zz4=',
  flock:
    'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjYuNzUgMTA5LjEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNTJkYmYzO308L3N0eWxlPjwvZGVmcz48dGl0bGU+ZmxvY2s8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLjU3LDEwLjMzQzUsMTEuODEsMiwxNC4wNy43NSwxOSwuMTQsMjEuNC4xLDIyLjEuNTgsMjMuMjNjMS4zMSwzLjE4LDcsNi40MSwxMy43Myw3Ljg5LDMuODQuODMsMTMuMy43NCwxNi42NS0uMTdzNi41OS0yLjQ5LDcuODEtMy44OFM0MiwyMS41Myw0MiwyMC4zMWMwLTIuNDktMi44Ny01LjU4LTYuNzUtNy4zN0MyOS4zOSwxMC4yNCwxOSw5LjA2LDEyLjU3LDEwLjMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjUgLTkuODIpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTksMjAuMTNjLTQuMDUuNTctNi43NSwxLjY2LTksMy42N0M0OC42MiwyNSw0Ny4wNSwyOS44Niw0Ny4zNSwzMmMuNDQsMy40NCw0LjQ1LDYuNzEsMTAuOTUsOS4xMSw3LjE5LDIuNTcsMTEuMTEsNS4yNywxMyw4Ljg5LDEsMi4xNC45MSwzLjg0LS43NCw3LjcyLTIuNDksNS43NS0xLjc5LDksMi43OSwxMy41MSw1LjEsNS4xLDExLjU5LDcuNTQsMjAuMDksNy41OSw3LDAsMTAuNTUtMS4wOSwxNC00LjQ5LDkuMTEtOS4xNiw1LTE4LjctMTAuMzgtMjQuNDItNS4xOS0xLjkxLTcuOC0zLjM1LTEwLjI0LTUuNjItMy41OC0zLjMxLTQuMjMtNS43MS0yLjUzLTlhOS4xNyw5LjE3LDAsMCwwLC44Ny0zLjc1YzAtMS44My0uMjItMi4zMS0yLTQuMzJhMTcuNiwxNy42LDAsMCwwLTUtMy43NUEzOC4wNiwzOC4wNiwwLDAsMCw1OSwyMC4xM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjI1IC05LjgyKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk3LjYyLDMwLjY0Qzk0LjM1LDMxLjksOTMuMzksMzMsOTIsMzcuMjJjLTEsMi43MS0uODcsNC4xOS40NCw2LjM3LDMuNzksNi41NCwxNy4zNSwxMS4yOSwyNS44NSw5LjExLDMtLjc5LDUuNDktMi4zNiw2LjE5LTMuODhhMTkuMzYsMTkuMzYsMCwwLDEsMS40OC0yLjQ0QTYuMjEsNi4yMSwwLDAsMCwxMjYuMyw0MGMtMS43NC0zLjY2LTcuOTMtNy42Ny0xNC4zOC05LjMzQzEwNy4zOCwyOS40NiwxMDAuNjMsMjkuNDYsOTcuNjIsMzAuNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yNSAtOS44MikiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01OC4zLDc2LjQxYy04Ljk0LDEuMTQtMTcuMDksNi40MS0yMC4yMywxMy4xN3MtMy4yNywxMS0uNjUsMTYuM2MyLjcsNS41LDksMTAuMTIsMTYuNzgsMTIuMjUsMy44NCwxLjA1LDEzLjQ3LDEuMDUsMTcuMjYsMCw4LjUtMi4zNSwxNC4zLTcuMTksMTcuOTItMTQuOTUsMS4wNS0yLjE4LDEuMjItMy4xNCwxLjIyLTYuNSwwLTMuNTMtLjEzLTQuMjItMS40LTYuODgtMi43NC01LjgtOS44OS0xMS0xNy41Ni0xMi42OUE0Ni4wOCw0Ni4wOCwwLDAsMCw1OC4zLDc2LjQxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjUgLTkuODIpIi8+PC9zdmc+'
};

const available = {
  firefox: { name: 'Firefox', icon: images.firefox },
  chrome: { name: 'Chrome', icon: images.chrome },
  iexplore: { name: 'Internet explorer', icon: images.iexplore },
  safari: { name: 'Safari', icon: images.safari },
  opera: { name: 'Opera', icon: images.opera },
  maxthon: { name: 'maxthon', icon: images.maxthon },
  netscape: { name: 'Netscape', icon: images.netscape },
  flock: { name: 'Flock', icon: images.flock }
};

class Browser extends Component {
  render() {
    const { vendor, version, showBrowserVendor, showBrowserVersion } = this.props;
    return (
      <div className="d-inline Browser">
        <Image
          src={available[vendor].icon}
          alt={`Browser ${available[vendor].name} icon`}
          className="Browser__Icon"
        />
        {showBrowserVendor && <div className="Browser__Text"> {available[vendor].name}</div>}
        {showBrowserVersion && <div className="Browser__Version">{version}</div>}
      </div>
    );
  }
}

Browser.propTypes = {
  showBrowserVendor: PropTypes.bool,
  showBrowserVersion: PropTypes.bool,
  vendor: PropTypes.string,
  version: PropTypes.string
};
Browser.defaultProps = {
  showBrowserVendor: true,
  showBrowserVersion: true,
  vendor: '',
  version: ''
};

export default Browser;
