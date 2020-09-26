import styled from 'styled-components'

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
`

export const BulletedList = styled(List)`
    list-style-type: "•  ";
    padding: 0.8rem;
`

export const ListItem = styled.li`
    line-height: 1.5;
`