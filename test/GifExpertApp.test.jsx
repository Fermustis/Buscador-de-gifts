import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Prebas en <GifExpertApp/>', () => {
    test('Que carge el AddCategory y GifGrid', () => {

        render(<GifExpertApp />)
        expect(screen.getByText('GifExpertApp'))
    
        screen.debug()
    })
})