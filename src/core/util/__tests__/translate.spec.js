import * as translate from '../translate'

describe('Translate', () => {
  it('should get default language', () => {
    expect(translate.getLanguage()).toBe('en-US')
  })

  it('should set language', () => {
    translate.setLanguage('pt-BR')

    expect(translate.getLanguage()).toBe('pt-BR')
  })

  it('should reload after language change', () => {
    const reload = jest
      .spyOn(window.location, 'reload')
      .mockImplementation()

    translate.setLanguage('pt-BR', true)

    expect(reload).toHaveBeenCalled()

    reload.mockRestore()
  })

  it('should get preferencial language', () => {
    const language = translate.getPreferentialLanguage()
    const expected = ['en-US', 'pt-BR']

    expect(expected).toContain(language)
    
    expect(language).toMatchSnapshot()
  })

})
