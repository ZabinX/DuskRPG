from playwright.sync_api import sync_playwright, expect
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:8000/client.html", timeout=120000)

        # Wait for the CheerpJ display to be created
        expect(page.locator("#cheerpjDisplay")).to_be_visible(timeout=60000)

        # Give the applet a generous amount of time to load
        time.sleep(60)

        page.screenshot(path="jules-scratch/verification/game_loaded.png")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
